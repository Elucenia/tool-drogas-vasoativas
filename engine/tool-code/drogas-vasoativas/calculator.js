'use strict';
// Own versioned method. Arithmetic evidence is not clinical approval.
const methods=require('../../restored-methods.cjs');
const definition=methods.definitions["drogas-vasoativas"];
const metadata=Object.freeze({id:definition.id,title:definition.title,fields:definition.fields,methodVersion:definition.version,reviewStatus:'needs-review',clinicalValidation:'not-performed'});
module.exports=Object.freeze({metadata,calculate:input=>methods.calculate("drogas-vasoativas",input)});
