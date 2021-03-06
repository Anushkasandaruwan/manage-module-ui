const ApplicationService = require('./application_service');

module.exports = [
    {
        method: 'POST',
        path: '/api/applications/search',
        handler: ApplicationService.searchApplicationsForApproval,
    },
    {
        method: 'POST',
        path: '/api/applications/statistics',
        handler: ApplicationService.getApplicationStatistics
    },
    {
        method : 'GET',
        path : '/api/applications/graph/{type}/{user}',
        handler : ApplicationService.getGraphData
    },
    {
        method : 'GET',
        path : '/api/applications/getcreditplan',
        handler : ApplicationService.getCreditPlan
    },
    {
        method: 'POST',
        path: '/api/applications/assign',
        handler: ApplicationService.assignApplicationTaskToUser
    },
    {
        method: 'POST',
        path: '/api/applications/approve/application/creation',
        handler: ApplicationService.approveApplicationCreation
    },
    {
        method: 'POST',
        path: '/api/applications/approve/subscription/creation',
        handler: ApplicationService.approveSubscriptionCreation
    }

];
