
# ControlSchema Changes Log


## 2020-10-08

 - El campo `type?: FormFieldType` de `FormFieldContent` se dejó de usar y fue borrado. Él fue sustituido por el campo `controlType?: Type<any>`. 
 
 - Fue borrado el `enum FormFieldType` porque se dejó de usar. 
 
 - Fue borrado el fichero `form-container.component.ts` (junto a las declaraciones de `FormContainerComponent`, `PanelContent_Depr` y `FormContainerAction`). 
 
 - Fue borrado el fichero `form-container.service.ts` (junto a las declaraciones de `FormContainerService`). 
 
 - Fue borrado el fichero `select.component.ts` (junto a las declaraciones de `SelectComponent` y `SelectOption`). El componente `SelectComponent` fue sustituido por el componente `InputSelectComponent`.
 
 - Fue borrado el fichero `` (junto a las declaraciones de ``). 


## Changes more old

 - En `form-container.component.ts` ocurrieron estos cambios: 
content ==> formSectionContent 
value ==> extraContent 
formSection ==> Ahora es un campo de la clase. 
panels ==> panelsContent 

 - En `FormFieldsComponent` ocurrieron estos cambios: 
Nombre de la clase de `FormFieldsComponent` ==> `ComponentFactory` 
fields ==> fieldsContent 
toco-form-fields ==> component-factory 

 - En `SelectComponent` ocurrieron estos cambios: 
internalControl ==> formControl 


