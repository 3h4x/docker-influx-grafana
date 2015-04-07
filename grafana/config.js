define(['settings'],
function (Settings) {
  return new Settings({
    datasources: {
      influx: {
        default: true,
        grafanaDB: "grafana",
        type: 'influxdb',
        url: "http://"+window.location.hostname+":8086/db/grafana",
        username: "root",
        password: "root",
      }
    },
    default_route: '/dashboard/file/default.json',
    timezoneOffset: null,
    grafana_index: "grafana-dash",
    unsaved_changes_warning: true,
    panel_names: ['text','graphite']
  });
});
