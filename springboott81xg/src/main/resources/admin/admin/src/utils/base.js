const base = {
    get() {
        return {
            url : "http://localhost:8080/springboott81xg/",
            name: "springboott81xg",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboott81xg/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于协同过滤算法的体育商品推荐系统"
        } 
    }
}
export default base
