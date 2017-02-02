/* Must include inputmask.js */


/** format phone numbers */
var phoneMask = [{ "mask": "(###) ###-####"}];
$('.phone').inputmask({ 
	mask: phoneMask, 
	greedy: false, 
	definitions: { '#': { validator: "[0-9]", cardinality: 1}}
});
