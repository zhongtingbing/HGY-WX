// 生成或者获取报告页面的外部容器
const getIframeContainer = () => {
  const ic = document.getElementById("iframeContainer");
  if (!ic) {
    const iframeContainer = document.createElement("div");
    iframeContainer.id = "iframeContainer";
    iframeContainer.style.visibility = "hidden";
    document.body.appendChild(iframeContainer);
    return iframeContainer;
  }
  return ic;
};

class SendModal extends React.Component {
  // ...

  // 点击开始上传
  handleUpload = () => {
    // 获取iframe容器和这个报告的ID
    const iframeContainer = getIframeContainer();
    const iframeId = `iframe_${this.state.id}`;

    // iframe的load事件回调，执行该回调后开始执行this.createAndUpload()
    const onloadCallback = () => {
      this.createAndUpload(iframeId).then(
        // resolve和reject后移除报告iframe
        () => {
          ReactDOM.unmountComponentAtNode(iframeContainer);
        },
        errMsg => {
          ReactDOM.unmountComponentAtNode(iframeContainer);
          console.error(errMsg);
        }
      );
    };

    // 开始渲染报告的iframe
    ReactDOM.render(
      <ReportIframe
        id={iframeId}
        src={reportURL}
        onLoad={onloadCallback}
        key={iframeId}
      />,
      iframeContainer
    );
  };

  createAndUpload = iframeId => {
    return new Promise((resolve, reject) => {
      // 从iframe中获取需要保存为PDF的DOM元素
      let pages = Array.from(
        document
          .getElementById(iframeId)
          .contentDocument.querySelectorAll(".pdfpage")
      );
      console.log(pages);
      const pagesLen = pages.length;
      if (!pagesLen) {
        reject("打开报告失败！");
      }

      // 初始化一个pdf待用
      const doc = new jsPDF("p", "mm", "a4");
      const imgArr = [];
      console.log("成功抓取pages");
      // 将每个元素作为一个页面处理
      pages.forEach((page, idx) => {
        console.log(`正在绘制canvas[${idx}]`);
        html2canvas(page, {
          scale: 2,
          logging: false,
          useCORS: true,
          imageTimeout: 60000
        }).then(canvas => {
          // canvas保存为图片
          let imgData = canvas.toDataURL("image/jpeg", 1.0);
          imgArr.push({ index: idx, value: imgData });
          if (imgArr.length === pagesLen) {
            console.log("canvas绘制完成，正在生成pdf");
            // 通过idx保证页面顺序
            let sortedArr = imgArr.sort((a, b) => a.index - b.index);
            sortedArr = sortedArr.map(item => item.value);
            sortedArr.forEach((img, idx) => {
              // 将图片放入pdf文件中
              if (idx > 0) {
                doc.addPage();
              }
              doc.addImage(img, "JPEG", 0, 0, 210, 297);
              if (idx + 1 === pagesLen) {
                // 全部放入pdf文件后，保存并上传
                const pdf = doc.output("blob");
                console.log("成功生成pdf，正在上传");

                const formData = new FormData();
                formData.append("file", pdf);
                fetch(`uploadURL`, {
                  method: "post",
                  body: formData
                })
                  .then(response => response.json())
                  .then(resp => {
                    if (resp.Status === 0) {
                      console.log("上传成功");
                      resolve("success");
                    } else {
                      console.log("上传失败");
                      reject("上传报告失败！");
                    }
                  });
              }
            });
          }
        });
      });
    });
  };

  // ...
}

class ReportIframe extends React.Component {
  // React通过js渲染页面，所以iframe触发onload后可能页面是一个空白页面，所以通过getPages方法确保React渲染完成后出发onLoad回调
  getPages = (e, times = 1) => {
    const pages = Array.from(
      this.iframe.contentDocument.querySelectorAll(".pdfpage")
    );
    if (pages.length || times >= 5) {
      this.props.onLoad();
      this.iframe.removeEventListener("load", this.getPages);
    } else {
      setTimeout(() => {
        times++;
        this.getPages(e, times);
      }, 1000);
    }
  };
  componentDidMount() {
    this.iframe.addEventListener("load", this.getPages, false);
  }
  render() {
    return (
      <iframe
        id={this.props.id}
        src={this.props.src}
        ref={node => (this.iframe = node)}
      />
    );
  }
}
