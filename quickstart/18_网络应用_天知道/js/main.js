/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息
*/

var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: []
    },
    methods: {
        searchWeather: function () {
            // 保存this
            var that = this;

            // 调用接口
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(
                function (response) {
                    // console.log(response.data.data.forecast);
                    that.weatherList = response.data.data.forecast;
                }
            ).catch(
                function (err) {

                }
            )
        },
        changeCity: function(city) {
            this.city = city;
            this.searchWeather();
        }
    }
})