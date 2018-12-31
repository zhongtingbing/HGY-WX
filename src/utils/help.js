export function XLabelFormatter(params) {
  var newParamsName = "";
  var paramsNameNumber = params.length;
  var provideNumber = 3;  //一行显示几个字
  var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
  if (paramsNameNumber > provideNumber) {
    for (var p = 0; p < rowNumber; p++) {
      var tempStr = "";
      var start = p * provideNumber;
      var end = start + provideNumber;
      if (p == rowNumber - 1) {
        tempStr = params.substring(start, paramsNameNumber);
      } else {
        tempStr = params.substring(start, end) + "\n";
      }
      newParamsName += tempStr;
    }

  } else {
    newParamsName = params;
  }
  return newParamsName
}
