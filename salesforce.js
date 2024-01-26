<style type='text/css'>
	.embeddedServiceHelpButton .helpButton .uiButton {
		background-color: #005290;
		font-family: "Arial", sans-serif;
	}
	.embeddedServiceHelpButton .helpButton .uiButton:focus {
		outline: 1px solid #005290;
	}
</style>

<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Of false (onwaar)
		embedded_svc.settings.language = ''; //Geef bijvoorbeeld 'en' of 'en-US' op

		//embedded_svc.settings.defaultMinimizedText = '...'; //(Wordt standaard Chatten met een expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Wordt standaard Agent offline)

		//embedded_svc.settings.loadingText = ''; //(Wordt standaard Laden)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Stelt het domein voor uw implementatie dusdanig in dat bezoekers door subdomeinen kunnen navigeren tijdens een chatsessie)

		// Instellingen voor Chat
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		//};
		//embedded_svc.settings.prepopulatedPrechatFields = {}; //Stelt het automatisch invullen van pre-chat formuliervelden in
		//embedded_svc.settings.fallbackRouting = []; //Een array van knop-ID's, gebruikers-ID's of userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Standaardwaarden tot Contact opnemen)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://cloudfrl-dev-ed.develop.my.salesforce.com',
			'https://cloudfrl-dev-ed.develop.my.site.com/defaulthelpcenter26Jan',
			gslbBaseURL,
			'00DWV000000Gold',
			'Chat',
			{
				baseLiveAgentContentURL: 'https://c.la1-core1.sfdc-cehfhs.salesforceliveagent.com/content',
				deploymentId: '572WV000000BcgH',
				buttonId: '573WV0000002zXF',
				baseLiveAgentURL: 'https://d.la1-core1.sfdc-cehfhs.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'Chat',
				isOfflineSupportEnabled: true
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://cloudfrl-dev-ed.develop.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
</script>
