
var myChart = echarts.init(document.getElementById('skills'));
var option = {
  tooltip: {},
  radar: {
      name: {
          textStyle: {
              color: '#f60',
              backgroundColor: '#D9D9D9',
              borderRadius: 3,
              padding: [3, 5]
          }
      },
      indicator: [
        { name: '静态页面', max: 100},
        { name: '编程基础', max: 100},
        { name: 'Vue', max: 100},
        { name: 'jQuery', max: 100},
        { name: '项目开发', max: 100},
        { name: '沟通能力', max: 100}
      ]
  },
  series: [{
      type: 'radar',
      itemStyle: {
          color: "#f60"
      },
      tooltip: {
          trigger: 'item'
      },
      data: [
          {
              value: [100, 80, 90, 70, 90, 70],
              name: '能力雷达'
          }
      ]
  }]
};
myChart.setOption(option);