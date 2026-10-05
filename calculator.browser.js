/* ELUCENIA per-tool fixed module bundle. Preserve all original and method-code notices. */
(function(){"use strict";const factories={"tool-code/drogas-vasoativas/calculator.js":function(module,exports,require){
'use strict';
// Own versioned method. Arithmetic evidence is not clinical approval.
const methods=require('../../restored-methods.cjs');
const definition=methods.definitions["drogas-vasoativas"];
const metadata=Object.freeze({id:definition.id,title:definition.title,fields:definition.fields,methodVersion:definition.version,reviewStatus:'needs-review',clinicalValidation:'not-performed'});
module.exports=Object.freeze({metadata,calculate:input=>methods.calculate("drogas-vasoativas",input)});

},
"restored-methods.cjs":function(module,exports,require){
'use strict';
// Own implementations of explicitly versioned methods. Scientific and language
// review remain unsigned. No treatment, referral or diagnostic verdict is emitted.
// This archived, read-only source inventory is independent of generated public
// metadata. Re-running the content migration must never duplicate input fields.
const original=require('./restoration-original-tools.json');
const definitions={};
const num=(id,label,min,max,unit,extra={})=>[id,label,'num',{min,max,unit,...extra}];
const select=(id,label,opts)=>[id,label,'sel',{opts}];
const yesno=(id,label)=>select(id,label,{'0':'Não','1':'Sim'});
const adult=num('idade','Idade',18,110,'anos');
const context=label=>yesno('contexto',label);
const ok=(a)=>{if(a.contexto!=='1')throw new DomainError('contexto','Confirme a população e as condições de aplicação da versão selecionada.');};
class DomainError extends Error{constructor(field,message){super(message);this.field=field;}}
const f=(value,places=2)=>value.toLocaleString('pt-BR',{minimumFractionDigits:places,maximumFractionDigits:places});
const out=(value,unit,label,raw,places=2)=>({main:[typeof value==='number'?f(value,places):value,unit],label,raw});
function define(id,version,fields,formula,limits,calculate,additionalSources=[]){
 const source=original.find(t=>t.id===id);if(!source)throw Error('Unknown method '+id);
 definitions[id]={id,title:source.title,fields,version,formula,limits,sources:[...source.sources,...additionalSources],calculate};
}
const fields=id=>structuredClone(original.find(t=>t.id===id).fields);
const omit=(id,names)=>fields(id).filter(field=>!names.includes(field[0]));
const cite=(title,url)=>[title,url];

const waterFields=id=>omit(id,['meta']).map(row=>row[0]==='peso'?[...row.slice(0,3),{...row[3],min:30}]:row[0]==='grupo'?[row[0],'Fração estimada de água corporal total','sel',{opts:{'0.6':'0,60','0.5':'0,50','0.45':'0,45'}}]:row);

define('drogas-vasoativas','Conversão dimensional de princípio ativo; sem faixas de dose',
 [...fields('drogas-vasoativas').map(row=>row[0]==='massa'?[row[0],'Massa do princípio ativo em base, não do sal','num',row[3]]:row),context('Massa equivalente em base, bula da formulação, volume final, unidade e dose prescrita conferidos?')],
 'Concentração em mcg/mL = massa do princípio ativo em mg × 1000/volume final. Vazão = dose × (peso se mcg/kg/min) × 60/concentração. Dose = vazão × concentração/[60 × (peso se necessário)].',
 'Não converte automaticamente massa do sal em base nem escolhe dose usual. É obrigatório conferir formulação; nome da droga não preenche dose, concentração ou proporção.',
 a=>{ok(a);if(a.unidade==='kg'&&!(a.peso>0))throw new DomainError('peso','Informe o peso para mcg/kg/min.');const conc=a.massa*1000/a.volume,w=a.unidade==='kg'?a.peso:1;if(a.modo==='dose'){if(!(a.dose>0))throw new DomainError('dose','Informe a dose prescrita.');const vazao=a.dose*w*60/conc;return out(vazao,'mL/h','Conversão de vazão',{conc,vazao,dose:a.dose});}if(!(a.vazao>0))throw new DomainError('vazao','Informe a vazão.');const dose=a.vazao*conc/(60*w);return out(dose,a.unidade==='kg'?'mcg/kg/min':'mcg/min','Conversão de dose',{conc,dose,vazao:a.vazao},4);},
 [cite('DailyMed · norepinefrina · equivalência base/sal e concentração final','https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=52e22892-4fc3-4f53-9f39-0b5c66da3040&version=3')]);

function calculate(id,input){
 const method=definitions[id];if(!method)return {error:'Método inexistente.',code:'TOOL_NOT_FOUND'};
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe os campos.',code:'INVALID_INPUT'};
 const values={};
 for(const [name,,kind,options={}] of method.fields){const value=input[name];
  if(kind==='chk'){if(typeof value!=='boolean')return {error:'Responda sim ou não.',code:'MISSING_BOOLEAN',field:name};values[name]=value;continue;}
  if(value==null||value===''){if(!options.opt)return {error:'Preencha o campo obrigatório.',code:'REQUIRED_FIELD',field:name};values[name]=null;continue;}
  if(kind==='num'){if(typeof value!=='number'||!Number.isFinite(value))return {error:'Número inválido.',code:'INVALID_INPUT',field:name};if(value<options.min||value>options.max)return {error:'Valor fora do intervalo.',code:'OUT_OF_RANGE',field:name};if(options.integer&&!Number.isInteger(value))return {error:'Informe um número inteiro.',code:'INTEGER_REQUIRED',field:name};}
  else if(typeof value!=='string'||!Object.hasOwn(options.opts||{},value))return {error:'Opção inválida.',code:'INVALID_OPTION',field:name};
  values[name]=value;
 }
 try{const result=method.calculate(values);if(Object.values(result.raw).some(v=>typeof v==='number'&&!Number.isFinite(v)))throw new DomainError('', 'Resultado fora do domínio.');return {id,...result,methodVersion:method.version,clinicalValidation:'not-performed'};}
 catch(error){return {error:error instanceof DomainError?error.message:'Confira o domínio do método.',code:'METHOD_SCOPE',...(error.field?{field:error.field}:{})};}
}
module.exports={definitions,calculate};
},
"restoration-original-tools.json":function(module,exports,require){
module.exports=[{"id":"drogas-vasoativas","title":"Infusão de drogas vasoativas","fields":[["droga","Droga","sel",{"opts":{"nora":"Noradrenalina","adre":"Adrenalina","dopa":"Dopamina","dobuta":"Dobutamina","fenil":"Fenilefrina","milri":"Milrinona","outra":"Outra droga"}}],["modo","Calcular","radio",{"opts":{"dose":"Vazão a partir da dose","vazao":"Dose a partir da vazão"}}],["unidade","Unidade da dose","radio",{"opts":{"kg":"mcg/kg/min","min":"mcg/min"}}],["massa","Quantidade de droga na solução","num",{"min":0.1,"max":2000,"step":0.1,"unit":"mg","ph":"16"}],["volume","Volume total da solução","num",{"min":10,"max":1000,"unit":"mL","ph":"250"}],["peso","Peso (para mcg/kg/min)","num",{"min":2,"max":300,"step":0.1,"unit":"kg","ph":"70","opt":true}],["dose","Dose","num",{"min":0.001,"max":100,"step":0.001,"unit":"mcg/kg/min ou mcg/min","ph":"0,1","opt":true}],["vazao","Vazão da bomba","num",{"min":0.1,"max":999,"step":0.1,"unit":"mL/h","ph":"10","opt":true}]],"sources":[["Overgaard CB, Dzavík V. Inotropes and vasopressors: review of physiology and clinical use in cardiovascular disease. Circulation, 2008.","https://doi.org/10.1161/CIRCULATIONAHA.107.728840"],["Evans L et al. Surviving sepsis campaign: international guidelines for management of sepsis and septic shock 2021. Intensive Care Med, 2021.","https://doi.org/10.1007/s00134-021-06506-y"]]}];
}},deps={"tool-code/drogas-vasoativas/calculator.js":{"../../restored-methods.cjs":"restored-methods.cjs"},"restored-methods.cjs":{"./restoration-original-tools.json":"restoration-original-tools.json"},"restoration-original-tools.json":{}},cache={};function load(id){if(cache[id])return cache[id].exports;if(!Object.hasOwn(factories,id))throw Error("Unknown fixed module");const m={exports:{}};cache[id]=m;factories[id](m,m.exports,r=>{const target=deps[id]?.[r];if(!target)throw Error("Unsupported fixed import "+r);return load(target);});return m.exports;}globalThis.EluceniaTool=load("tool-code/drogas-vasoativas/calculator.js");})();
