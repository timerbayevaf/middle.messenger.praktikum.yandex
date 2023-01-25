type DOMElement = Element;
type Booleanish = boolean | 'true' | 'false';
type Key = string | number;

declare namespace JSX {
  type Instance = {
    dom: Node;
    element: Element;
    childInstances: Array<Instance>;
  };

  interface Element<P = any, T extends string = string> {
    type: T;
    props: P;
    key?: Key | null;
  }
  type ReactText = string | number;
  type ReactChild = Element | ReactText;
  type ReactFragment = {} | Iterable<ReactNode>;
  interface ReactPortal extends Element {
    key: Key | null;
    children: ReactNode;
  }
  type ReactNode =
    | ReactChild
    | ReactFragment
    | ReactPortal
    | boolean
    | null
    | undefined;
  type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): Element<any, any> | null;
    displayName?: string | undefined;
  }

  type Callback = () => void;

  type EventHandler = (e: Event) => void;

  interface HTMLNodeElement
    extends HTMLAttributes,
      BaseHTMLAttributes,
      DOMAttributes,
      EventTarget {
    setAttribute?(key: string, val: string): void;
    removeAttribute?(key: string): void;
  }

  interface IntrinsicElements {
    // HTML
    a: HTMLProps;
    abbr: HTMLProps;
    address: HTMLProps;
    area: HTMLProps;
    article: HTMLProps;
    aside: HTMLProps;
    audio: HTMLProps;
    b: HTMLProps;
    base: HTMLProps;
    bdi: HTMLProps;
    bdo: HTMLProps;
    big: HTMLProps;
    blockquote: HTMLProps;
    body: HTMLProps;
    br: HTMLProps;
    button: HTMLProps;
    canvas: HTMLProps;
    caption: HTMLProps;
    cite: HTMLProps;
    code: HTMLProps;
    col: HTMLProps;
    colgroup: HTMLProps;
    data: HTMLProps;
    datalist: HTMLProps;
    dd: HTMLProps;
    del: HTMLProps;
    details: HTMLProps;
    dfn: HTMLProps;
    dialog: HTMLProps;
    div: HTMLProps;
    dl: HTMLProps;
    dt: HTMLProps;
    em: HTMLProps;
    embed: HTMLProps;
    fieldset: HTMLProps;
    figcaption: HTMLProps;
    figure: HTMLProps;
    footer: HTMLProps;
    form: HTMLProps;
    h1: HTMLProps;
    h2: HTMLProps;
    h3: HTMLProps;
    h4: HTMLProps;
    h5: HTMLProps;
    h6: HTMLProps;
    head: HTMLProps;
    header: HTMLProps;
    hgroup: HTMLProps;
    hr: HTMLProps;
    html: HTMLProps;
    i: HTMLProps;
    iframe: HTMLProps;
    img: HTMLProps;
    input: HTMLProps;
    ins: HTMLProps;
    kbd: HTMLProps;
    keygen: HTMLProps;
    label: HTMLProps;
    legend: HTMLProps;
    li: HTMLProps;
    link: HTMLProps;
    main: HTMLProps;
    map: HTMLProps;
    mark: HTMLProps;
    menu: HTMLProps;
    menuitem: HTMLProps;
    meta: HTMLProps;
    meter: HTMLProps;
    nav: HTMLProps;
    noindex: HTMLProps;
    noscript: HTMLProps;
    object: HTMLProps;
    ol: HTMLProps;
    optgroup: HTMLProps;
    option: HTMLProps;
    output: HTMLProps;
    p: HTMLProps;
    param: HTMLProps;
    picture: HTMLProps;
    pre: HTMLProps;
    progress: HTMLProps;
    q: HTMLProps;
    rp: HTMLProps;
    rt: HTMLProps;
    ruby: HTMLProps;
    s: HTMLProps;
    samp: HTMLProps;
    slot: HTMLProps;
    script: HTMLProps;
    section: HTMLProps;
    select: HTMLProps;
    small: HTMLProps;
    source: HTMLProps;
    span: HTMLProps;
    strong: HTMLProps;
    style: HTMLProps;
    sub: HTMLProps;
    summary: HTMLProps;
    sup: HTMLProps;
    table: HTMLProps;
    template: HTMLProps;
    tbody: HTMLProps;
    td: HTMLProps;
    textarea: HTMLProps;
    tfoot: HTMLProps;
    th: HTMLProps;
    thead: HTMLProps;
    time: HTMLProps;
    title: HTMLProps;
    tr: HTMLProps;
    track: HTMLProps;
    u: HTMLProps;
    ul: HTMLProps;
    var: HTMLProps;
    video: HTMLProps;
    wbr: HTMLProps;
    webview: HTMLProps;
  }

  // Описание свойств внутри TSX
  interface HTMLProps extends AllHTMLAttributes {}

  // Тут свойства обычного html и кастомные className и тд
  type Attributes = BaseHTMLAttributes & HTMLAttributes;
  interface AllHTMLAttributes
    extends DOMAttributes,
      BaseHTMLAttributes,
      HTMLAttributes {}
  interface BaseHTMLAttributes {
    // Standard HTML Attributes
    accept?: string | undefined;
    acceptCharset?: string | undefined;
    action?: string | undefined;
    allowFullScreen?: boolean | undefined;
    allowTransparency?: boolean | undefined;
    alt?: string | undefined;
    as?: string | undefined;
    async?: boolean | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    autoPlay?: boolean | undefined;
    capture?: boolean | 'user' | 'environment' | undefined;
    cellPadding?: number | string | undefined;
    cellSpacing?: number | string | undefined;
    charSet?: string | undefined;
    challenge?: string | undefined;
    checked?: boolean | undefined;
    cite?: string | undefined;
    classID?: string | undefined;
    cols?: number | undefined;
    colSpan?: number | undefined;
    content?: string | undefined;
    controls?: boolean | undefined;
    coords?: string | undefined;
    crossOrigin?: string | undefined;
    data?: string | undefined;
    dateTime?: string | undefined;
    default?: boolean | undefined;
    defer?: boolean | undefined;
    disabled?: boolean | undefined;
    download?: any;
    encType?: string | undefined;
    form?: string | undefined;
    formAction?: string | undefined;
    formEncType?: string | undefined;
    formMethod?: string | undefined;
    formNoValidate?: boolean | undefined;
    formTarget?: string | undefined;
    frameBorder?: number | string | undefined;
    headers?: string | undefined;
    height?: number | string | undefined;
    high?: number | undefined;
    href?: string | undefined;
    hrefLang?: string | undefined;
    htmlFor?: string | undefined;
    httpEquiv?: string | undefined;
    integrity?: string | undefined;
    keyParams?: string | undefined;
    keyType?: string | undefined;
    kind?: string | undefined;
    label?: string | undefined;
    list?: string | undefined;
    loop?: boolean | undefined;
    low?: number | undefined;
    manifest?: string | undefined;
    marginHeight?: number | undefined;
    marginWidth?: number | undefined;
    max?: number | string | undefined;
    maxLength?: number | undefined;
    media?: string | undefined;
    mediaGroup?: string | undefined;
    method?: string | undefined;
    min?: number | string | undefined;
    minLength?: number | undefined;
    multiple?: boolean | undefined;
    muted?: boolean | undefined;
    name?: string | undefined;
    nonce?: string | undefined;
    noValidate?: boolean | undefined;
    open?: boolean | undefined;
    optimum?: number | undefined;
    pattern?: string | undefined;
    placeholder?: string | undefined;
    playsInline?: boolean | undefined;
    poster?: string | undefined;
    preload?: string | undefined;
    readOnly?: boolean | undefined;
    rel?: string | undefined;
    required?: boolean | undefined;
    reversed?: boolean | undefined;
    rows?: number | undefined;
    rowSpan?: number | undefined;
    sandbox?: string | undefined;
    scope?: string | undefined;
    scoped?: boolean | undefined;
    scrolling?: string | undefined;
    seamless?: boolean | undefined;
    selected?: boolean | undefined;
    shape?: string | undefined;
    size?: number | undefined;
    sizes?: string | undefined;
    span?: number | undefined;
    src?: string | undefined;
    srcDoc?: string | undefined;
    srcLang?: string | undefined;
    srcSet?: string | undefined;
    start?: number | undefined;
    step?: number | string | undefined;
    summary?: string | undefined;
    target?: string | undefined;
    type?: string | undefined;
    useMap?: string | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
    width?: number | string | undefined;
    wmode?: string | undefined;
    wrap?: string | undefined;
  }

  interface HTMLAttributes {
    children?: Element[] | undefined;

    // React-specific Attributes
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | ReadonlyArray<string> | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;

    // Standard HTML Attributes
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: Booleanish | 'inherit' | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: Booleanish | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: Booleanish | undefined;
    style?: CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: 'yes' | 'no' | undefined;

    // Unknown
    radioGroup?: string | undefined; // <command>, <menuitem>

    // RDFa Attributes
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;

    // Non-standard Attributes
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: 'on' | 'off' | undefined;

    // Living Standard
    /**
     * Hints at the type of data that might be entered by the user while editing the element or its contents
     * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
     */
    inputMode?:
      | 'none'
      | 'text'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal'
      | 'search'
      | undefined;
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: string | undefined;
  }

  interface DOMAttributes {
    // Clipboard Events
    onCopy?: EventHandler | undefined;
    onCopyCapture?: EventHandler | undefined;
    onCut?: EventHandler | undefined;
    onCutCapture?: EventHandler | undefined;
    onPaste?: EventHandler | undefined;
    onPasteCapture?: EventHandler | undefined;

    // Composition Events
    onCompositionEnd?: EventHandler | undefined;
    onCompositionEndCapture?: EventHandler | undefined;
    onCompositionStart?: EventHandler | undefined;
    onCompositionStartCapture?: EventHandler | undefined;
    onCompositionUpdate?: EventHandler | undefined;
    onCompositionUpdateCapture?: EventHandler | undefined;

    // Focus Events
    onFocus?: EventHandler | undefined;
    onFocusCapture?: EventHandler | undefined;
    onBlur?: EventHandler | undefined;
    onBlurCapture?: EventHandler | undefined;

    // Form Events
    onChange?: EventHandler | undefined;
    onChangeCapture?: EventHandler | undefined;
    onBeforeInput?: EventHandler | undefined;
    onBeforeInputCapture?: EventHandler | undefined;
    onInput?: EventHandler | undefined;
    onInputCapture?: EventHandler | undefined;
    onReset?: EventHandler | undefined;
    onResetCapture?: EventHandler | undefined;
    onSubmit?: EventHandler | undefined;
    onSubmitCapture?: EventHandler | undefined;
    onInvalid?: EventHandler | undefined;
    onInvalidCapture?: EventHandler | undefined;

    // Image Events
    onLoad?: EventHandler | undefined;
    onLoadCapture?: EventHandler | undefined;
    onError?: EventHandler | undefined; // also a Media Event
    onErrorCapture?: EventHandler | undefined; // also a Media Event

    // Keyboard Events
    onKeyDown?: EventHandler | undefined;
    onKeyDownCapture?: EventHandler | undefined;
    /** @deprecated */
    onKeyPress?: EventHandler | undefined;
    /** @deprecated */
    onKeyPressCapture?: EventHandler | undefined;
    onKeyUp?: EventHandler | undefined;
    onKeyUpCapture?: EventHandler | undefined;

    // Media Events
    onAbort?: EventHandler | undefined;
    onAbortCapture?: EventHandler | undefined;
    onCanPlay?: EventHandler | undefined;
    onCanPlayCapture?: EventHandler | undefined;
    onCanPlayThrough?: EventHandler | undefined;
    onCanPlayThroughCapture?: EventHandler | undefined;
    onDurationChange?: EventHandler | undefined;
    onDurationChangeCapture?: EventHandler | undefined;
    onEmptied?: EventHandler | undefined;
    onEmptiedCapture?: EventHandler | undefined;
    onEncrypted?: EventHandler | undefined;
    onEncryptedCapture?: EventHandler | undefined;
    onEnded?: EventHandler | undefined;
    onEndedCapture?: EventHandler | undefined;
    onLoadedData?: EventHandler | undefined;
    onLoadedDataCapture?: EventHandler | undefined;
    onLoadedMetadata?: EventHandler | undefined;
    onLoadedMetadataCapture?: EventHandler | undefined;
    onLoadStart?: EventHandler | undefined;
    onLoadStartCapture?: EventHandler | undefined;
    onPause?: EventHandler | undefined;
    onPauseCapture?: EventHandler | undefined;
    onPlay?: EventHandler | undefined;
    onPlayCapture?: EventHandler | undefined;
    onPlaying?: EventHandler | undefined;
    onPlayingCapture?: EventHandler | undefined;
    onProgress?: EventHandler | undefined;
    onProgressCapture?: EventHandler | undefined;
    onRateChange?: EventHandler | undefined;
    onRateChangeCapture?: EventHandler | undefined;
    onSeeked?: EventHandler | undefined;
    onSeekedCapture?: EventHandler | undefined;
    onSeeking?: EventHandler | undefined;
    onSeekingCapture?: EventHandler | undefined;
    onStalled?: EventHandler | undefined;
    onStalledCapture?: EventHandler | undefined;
    onSuspend?: EventHandler | undefined;
    onSuspendCapture?: EventHandler | undefined;
    onTimeUpdate?: EventHandler | undefined;
    onTimeUpdateCapture?: EventHandler | undefined;
    onVolumeChange?: EventHandler | undefined;
    onVolumeChangeCapture?: EventHandler | undefined;
    onWaiting?: EventHandler | undefined;
    onWaitingCapture?: EventHandler | undefined;

    // MouseEvents
    onAuxClick?: EventHandler | undefined;
    onAuxClickCapture?: EventHandler | undefined;
    onClick?: EventHandler | undefined;
    onClickCapture?: EventHandler | undefined;
    onContextMenu?: EventHandler | undefined;
    onContextMenuCapture?: EventHandler | undefined;
    onDoubleClick?: EventHandler | undefined;
    onDoubleClickCapture?: EventHandler | undefined;
    onDrag?: EventHandler | undefined;
    onDragCapture?: EventHandler | undefined;
    onDragEnd?: EventHandler | undefined;
    onDragEndCapture?: EventHandler | undefined;
    onDragEnter?: EventHandler | undefined;
    onDragEnterCapture?: EventHandler | undefined;
    onDragExit?: EventHandler | undefined;
    onDragExitCapture?: EventHandler | undefined;
    onDragLeave?: EventHandler | undefined;
    onDragLeaveCapture?: EventHandler | undefined;
    onDragOver?: EventHandler | undefined;
    onDragOverCapture?: EventHandler | undefined;
    onDragStart?: EventHandler | undefined;
    onDragStartCapture?: EventHandler | undefined;
    onDrop?: EventHandler | undefined;
    onDropCapture?: EventHandler | undefined;
    onMouseDown?: EventHandler | undefined;
    onMouseDownCapture?: EventHandler | undefined;
    onMouseEnter?: EventHandler | undefined;
    onMouseLeave?: EventHandler | undefined;
    onMouseMove?: EventHandler | undefined;
    onMouseMoveCapture?: EventHandler | undefined;
    onMouseOut?: EventHandler | undefined;
    onMouseOutCapture?: EventHandler | undefined;
    onMouseOver?: EventHandler | undefined;
    onMouseOverCapture?: EventHandler | undefined;
    onMouseUp?: EventHandler | undefined;
    onMouseUpCapture?: EventHandler | undefined;

    // Selection Events
    onSelect?: EventHandler | undefined;
    onSelectCapture?: EventHandler | undefined;

    // Touch Events
    onTouchCancel?: EventHandler | undefined;
    onTouchCancelCapture?: EventHandler | undefined;
    onTouchEnd?: EventHandler | undefined;
    onTouchEndCapture?: EventHandler | undefined;
    onTouchMove?: EventHandler | undefined;
    onTouchMoveCapture?: EventHandler | undefined;
    onTouchStart?: EventHandler | undefined;
    onTouchStartCapture?: EventHandler | undefined;

    // Pointer Events
    onPointerDown?: EventHandler | undefined;
    onPointerDownCapture?: EventHandler | undefined;
    onPointerMove?: EventHandler | undefined;
    onPointerMoveCapture?: EventHandler | undefined;
    onPointerUp?: EventHandler | undefined;
    onPointerUpCapture?: EventHandler | undefined;
    onPointerCancel?: EventHandler | undefined;
    onPointerCancelCapture?: EventHandler | undefined;
    onPointerEnter?: EventHandler | undefined;
    onPointerEnterCapture?: EventHandler | undefined;
    onPointerLeave?: EventHandler | undefined;
    onPointerLeaveCapture?: EventHandler | undefined;
    onPointerOver?: EventHandler | undefined;
    onPointerOverCapture?: EventHandler | undefined;
    onPointerOut?: EventHandler | undefined;
    onPointerOutCapture?: EventHandler | undefined;
    onGotPointerCapture?: EventHandler | undefined;
    onGotPointerCaptureCapture?: EventHandler | undefined;
    onLostPointerCapture?: EventHandler | undefined;
    onLostPointerCaptureCapture?: EventHandler | undefined;

    // UI Events
    onScroll?: EventHandler | undefined;
    onScrollCapture?: EventHandler | undefined;

    // Wheel Events
    onWheel?: EventHandler | undefined;
    onWheelCapture?: EventHandler | undefined;

    // Animation Events
    onAnimationStart?: EventHandler | undefined;
    onAnimationStartCapture?: EventHandler | undefined;
    onAnimationEnd?: EventHandler | undefined;
    onAnimationEndCapture?: EventHandler | undefined;
    onAnimationIteration?: EventHandler | undefined;
    onAnimationIterationCapture?: EventHandler | undefined;

    // Transition Events
    onTransitionEnd?: EventHandler | undefined;
    onTransitionEndCapture?: EventHandler | undefined;
  }

  export interface CSSProperties {
    [key: string]: string | number;
  }
}

declare module '*.css';

declare module '*.png';

declare module '*.jpeg';

declare module 'bundle-text:*.svg';
