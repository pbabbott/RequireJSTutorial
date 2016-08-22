requirejs.config({
    baseUrl: baseURL + '/Scripts',
    paths: {
        'jquery': 'jquery-1.10.2',
        'bootstrap': 'bootstrap',
        'modules.calculator': 'modules/calculator'
    },
    shim: {
        'bootstrap': { deps: ['jquery'] },
    },
});