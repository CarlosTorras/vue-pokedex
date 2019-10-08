
<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "barchart",
  props: {
    pokemon: Object
  },
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "Stats",
          backgroundColor: "rgba(48, 168, 215, 0.87)",
          data: []
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "BASE STATS",
        lineHeight: 1.8,
        fontSize: 14,
        fontColor: "rgb(34, 34, 34)"
      },
      layout: {
        padding: {
          left: 10,
          right: 30,
          top: 10,
          bottom: 10
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 260
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  methods: {
    getStats() {
      for (let i = 0; i < 6; i++) {
        this.chartdata.labels.push(this.pokemon.stats[i].stat.name),
          this.chartdata.datasets[0].data.push(this.pokemon.stats[i].base_stat);
      }
    }
  },
  created() {
    this.getStats();
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style>
.small {
  max-width: 600px;
  margin: auto;
}
</style>