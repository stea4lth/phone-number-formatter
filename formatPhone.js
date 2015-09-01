/* Must include inputmask.js */


/** format phone numbers */
var phones = [{ "mask": "(###) ###-####"}];
$('#phone').inputmask({ 
	mask: phones, 
	greedy: false, 
	definitions: { '#': { validator: "[0-9]", cardinality: 1}}
});
