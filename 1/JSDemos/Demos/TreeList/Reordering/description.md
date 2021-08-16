TreeList columns have the same order as fields in data objects. You can use the [columns](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/) array to specify a different order. To reorder a column at runtime, change its [visibleIndex](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#visibleIndex) property.

Users can drag and drop column headers to reorder columns. To enable this feature, set the [allowColumnReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/#allowColumnReordering) property to **true**. If you do not want users to drag a specific column, disable its [allowReordering](/Documentation/ApiReference/UI_Components/dxTreeList/Configuration/columns/#allowReordering) property. In this demo, users cannot drag the Full Name column.