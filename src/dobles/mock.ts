// Un objeto con una serie de metodos
// Probablemente no queramos enviar un evento real al dashboard de análisis
// durante las pruebas, pero debemos asegurarnos de que se llamen.
const analytics = {
    sendEvent: function (eventName: string) {
        // send event to analytics dashboard;
    },
    sendButtonClickEvent: function () {
        this.sendEvent('button-click');
    },
    sendInitEvent: function () {
        this.sendEvent('init');
    }
};

export default analytics;