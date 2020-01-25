// The address of your Looker instance. Required.
export const lookerHost = 'sko2020.dev.looker.com'
// A dashboard that the user can see. Set to 0 to disable dashboard.
export const dashboardId = 2
// the name of the filter on the dashboard for state
export const dashboardStateFilter = 'State'
// api call to run for state dropdown
export const query_object = {
  "model": "thelook",
  "view": "order_items",
  "fields": ["users.state", "order_items.total_gross_margin"],
  "sorts": ["order_items.total_gross_margin desc"],
  "limit": "10",
  "filters": {}
}
// field name we will want to extract for dropdown
export const query_field_name = 'users.state'
// map the dashboard date filter to the query date filter
export const dashboard_date_filter = 'Date'
export const query_date_filter = 'order_items.created_date'