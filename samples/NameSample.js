enyo.kind({
	name:"g11n.sample.NameSample",
	kind: "FittableRows",
	classes: "g11n-sample",	
	components: [
		{kind: "onyx.Toolbar", content:$L("Names")},
		{tag:"br"},
		{kind: "onyx.InputDecorator", components: [
			{name:"numberInput", kind: "onyx.Input", placeholder: "Enter a Name",  style:"width:100%;", oninput:"inputChanged"}
		]},
		{tag:"br"},{tag:"br"},		
		{kind: "onyx.Groupbox", components: [
			{kind: "onyx.GroupboxHeader", content: "Name"},
			{name:"familyName", style: 'padding: 8px', content: "Family Name = "},
			{name:"givenName", style: 'padding: 8px', content: "Given Name = "},
			{name:"middleName", style: 'padding: 8px', content: "Middle Name = "},
		]},
	],
	inputChanged: function(inSender, inEvent) {
		var name = new enyo.g11n.Name(inSender.getValue())

		try {
			//note we're stripping undefined out of the result to beautify the sample
			this.$.familyName.setContent("Family Name = " + name.familyName.replace("undefined",""));
			this.$.givenName.setContent("Given Name = " + name.givenName.replace("undefined",""));
			this.$.middleName.setContent("Middle Name = " + name.middleName.replace("undefined",""));
		}
		catch (err){
			enyo.log(err);
		}	
	},
});