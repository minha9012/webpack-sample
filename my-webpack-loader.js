
module.exports = function myWebpackLoader(content){ //각 파일을 처리하기 위한 녀석
    return content.replace('console.log(','alert(');
}