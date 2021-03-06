export declare class _MatCheckboxRequiredValidatorModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<_MatCheckboxRequiredValidatorModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<_MatCheckboxRequiredValidatorModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<_MatCheckboxRequiredValidatorModule, [typeof i1.MatCheckboxRequiredValidator], never, [typeof i1.MatCheckboxRequiredValidator]>;
}

export declare const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: any;

export declare const MAT_CHECKBOX_DEFAULT_OPTIONS: InjectionToken<MatCheckboxDefaultOptions>;

export declare function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY(): MatCheckboxDefaultOptions;

export declare const MAT_CHECKBOX_REQUIRED_VALIDATOR: Provider;

export declare class MatCheckbox extends _MatCheckboxMixinBase implements ControlValueAccessor, AfterViewInit, AfterViewChecked, OnDestroy, CanColor, CanDisable, HasTabIndex, CanDisableRipple, FocusableOption {
    _animationMode?: string | undefined;
    _inputElement: ElementRef<HTMLInputElement>;
    _onTouched: () => any;
    ariaDescribedby: string;
    ariaLabel: string;
    ariaLabelledby: string | null;
    readonly change: EventEmitter<MatCheckboxChange>;
    get checked(): boolean;
    set checked(value: boolean);
    get disabled(): any;
    set disabled(value: any);
    id: string;
    get indeterminate(): boolean;
    set indeterminate(value: boolean);
    readonly indeterminateChange: EventEmitter<boolean>;
    get inputId(): string;
    labelPosition: 'before' | 'after';
    name: string | null;
    get required(): boolean;
    set required(value: boolean);
    ripple: MatRipple;
    value: string;
    constructor(elementRef: ElementRef<HTMLElement>, _changeDetectorRef: ChangeDetectorRef, _focusMonitor: FocusMonitor, _ngZone: NgZone, tabIndex: string, _animationMode?: string | undefined, _options?: MatCheckboxDefaultOptions | undefined);
    _getAriaChecked(): 'true' | 'false' | 'mixed';
    _isRippleDisabled(): any;
    _onInputClick(event: Event): void;
    _onInteractionEvent(event: Event): void;
    _onLabelTextChange(): void;
    focus(origin?: FocusOrigin, options?: FocusOptions): void;
    ngAfterViewChecked(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    toggle(): void;
    writeValue(value: any): void;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_indeterminate: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_tabIndex: NumberInput;
    static ɵcmp: i0.ɵɵComponentDeclaration<MatCheckbox, "mat-checkbox", ["matCheckbox"], { "disableRipple": "disableRipple"; "color": "color"; "tabIndex": "tabIndex"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "ariaDescribedby": "aria-describedby"; "id": "id"; "required": "required"; "labelPosition": "labelPosition"; "name": "name"; "value": "value"; "checked": "checked"; "disabled": "disabled"; "indeterminate": "indeterminate"; }, { "change": "change"; "indeterminateChange": "indeterminateChange"; }, never, ["*"]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCheckbox, [null, null, null, null, { attribute: "tabindex"; }, { optional: true; }, { optional: true; }]>;
}

export declare class MatCheckboxChange {
    checked: boolean;
    source: MatCheckbox;
}

export declare type MatCheckboxClickAction = 'noop' | 'check' | 'check-indeterminate' | undefined;

export interface MatCheckboxDefaultOptions {
    clickAction?: MatCheckboxClickAction;
    color?: ThemePalette;
}

export declare class MatCheckboxModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCheckboxModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatCheckboxModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatCheckboxModule, [typeof i2.MatCheckbox], [typeof i3.MatRippleModule, typeof i3.MatCommonModule, typeof i4.ObserversModule, typeof _MatCheckboxRequiredValidatorModule], [typeof i2.MatCheckbox, typeof i3.MatCommonModule, typeof _MatCheckboxRequiredValidatorModule]>;
}

export declare class MatCheckboxRequiredValidator extends CheckboxRequiredValidator {
    static ɵdir: i0.ɵɵDirectiveDeclaration<MatCheckboxRequiredValidator, "mat-checkbox[required][formControlName],             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]", never, {}, {}, never>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatCheckboxRequiredValidator, never>;
}

export declare const enum TransitionCheckState {
    Init = 0,
    Checked = 1,
    Unchecked = 2,
    Indeterminate = 3
}
