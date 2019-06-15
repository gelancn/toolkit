import { IWidget } from './IWidget';

type WidgetClass = new () => unknown;

export const WidgetImplements = {
    addWidget: function(map: Map<WidgetClass, unknown>, value: WidgetClass): void {
        if (map.get(value) != null) {
            return;
        }
        map.set(value, new value());
    },
    removeWidget: function(map: Map<WidgetClass, unknown>, value: WidgetClass): void {
        map.delete(value);
    },
    getWidget: function(map: Map<WidgetClass, unknown>, value: WidgetClass): unknown {
        return map.get(value);
    },
};

export class Widget implements IWidget {
    protected widgetMap: Map<WidgetClass, unknown> = new Map();
    public addWidget(value: WidgetClass): void {
        WidgetImplements.addWidget(this.widgetMap, value);
    }
    public removeWidget(value: WidgetClass): void {
        WidgetImplements.removeWidget(this.widgetMap, value);
    }
    public getWidget(value: WidgetClass): unknown {
        return WidgetImplements.getWidget(this.widgetMap, value);
    }
}
