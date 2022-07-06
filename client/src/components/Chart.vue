<template>
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
</template>

<script>
import Api from '@/services/Api'
import { GChart } from 'vue-google-charts'

export default {
    name: 'GoogleChart',
    components: {
        GChart
    },
    data() {
        return {
            chartData: [
                ['Year', 'Sales', 'Expenses', 'Profit'],
            ],
            chartOptions: {
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',
                }
            }
        }
    },
    mounted() {
        // get chart date from backend rest api
        var chartInfo = {chartType: "barChart"}
        Api().post('getChartData', chartInfo).then(res => {
            this.chartData = [...this.chartData, ...res.data]
        });
        console.log(this.chartData)
    }
}
</script>

<style scoped lang="scss">
</style>
