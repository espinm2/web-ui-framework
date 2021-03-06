/*****************************************************
 * 
 * ribbon-eventhander: source for ribbion UI elements
 * 
 * Purpose: contains all event handlers and creation of UI ribbion related UI elements
 * 
 * Usage: Importing the file and making use of the event handlers provided
 * 
 * 
 */


(function() {
    
    "use strict";
    
    window.ribbon = new window.AcidJs.Ribbon({
        //appIconUrl: "my-custom-app-icon.png", // {String} [optional] top left application icon
        flat: true, // {Boolean} [optional] applies flat ribbon styles as in MS Office 2013 and above
        boundingBox: $("#ribbon-ui"), // {jQueryDomObject} [required] ribbon bar placeholder element
        cssClasses: [ // {Array} [optional] additional CSS classes to be applied to the boundingBox. Default: []
            "css-class-abc",
            "css-class-def",
            "css-class-ghi"
        ],
        ng: { // {Object} support for AngularJs directives
            app: "",
            show: "",
            init: ""
        },
        //loadCss: false, // {Boolean} [optional] if set to false, the stylesheet of the ribbon will not be loaded from the control, but you will have to register it on the page via the <link /> tag
        //appRoot: "nested/folder/", // {String} [optional] by default, URLS of the ribbon are resolved from the root. Here you can specify different folder
        width: "100%", // {String} [optional] width (max-width) of the ribbon in pixels of percentage. default: "100%"
        minwidth: "auto", // {String} [optional] min-width of the ribbon in pixels of percentage. default: "auto"
        config: {
            defaultSelectedTab: 0, // {Number} [optional] default selected tab, default: 0
            fileTabMenu: [{ // {Object} [optional] file tab menu commands
                    hint: "Click to see the file menu", // {String} [optional] hint for the header item
                    name: "file", // {String} [required] menu name
                    label: "File"
                },{
                    name: "save", // {String} [required] menu item command name
                    label: "Save", // {String} [required] menu item command label
                    icon: "save.png"// {String} [optional] menu item command icon
                },{
                    name: "save-as",
                    label: "Save As",
                    icon: "save-as.png"
                },{
                    name: "Open",
                    label: "Open",
                    icon: "open.png"
                },{
                    name: "close",
                    label: "Close",
                    icon: "close.png"
                },{
                    name: "print",
                    label: "Print",
                    icon: "print.png"
                }],
            quickLaunchToolbar: [
                
             /* { // {Object} [optional] quick launch toolbar commands
                name: "save", // {String} [required] command name
                hint: "Save (Ctrl+S)", // {String} [optional] command hint
                //label: "Save", // {String} [optional] command label
                icon: "save.png" // {String} [required] command icon,
            },{
                name: "cut",
                hint: "Cut (Ctrl+X)",
                icon: "cut.png"
            },{
                name: "copy",
                hint: "Copy (Ctrl+C)",
                icon: "copy.png"
            },{
                name: "paste",
                hint: "Paste (Paste+V)",
                icon: "paste.png"
            },{
                name: "undo",    // NOTE: this might be useful later on
                hint: "Undo (Ctl+Z)",
                icon: "undo.png",
                label: "Undo"
            },{
                name: "redo",
                hint: "Redo (Ctl+Y)",
                icon: "redo.png",
                label: "Redo"
            },{
                name: "repeat",
                hint: "Repeat",
                icon: "repeat.png",
                label: "Repeat"
            }*/],
            
            
            /**
             * 
             * How to create icons
             * 1) Create a tab object
             * 2) In that tab object, create a "ribbon" aka a group of icons grouped together
             * 3) Create the icon under the tools under that "ribbon"
             * 
             * Note:  Things are in list form 
             * Tools:[ { }, { }, { }]
             * 
             * 
             * 
             */
            tabs: [
                
                {
                label: "Home", // {String} [required] label for the tab button
                hint: "Go home", // {String} [optional] label for the tab button
                name: "tab-home", // {String} [optional] id of the tab. if not set, a GUID will be used
                enabled: true, // {Boolean} [optional] default: true
                visible: true, // {Boolean} [optional] default: true
                props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                    tabSomething: 1,
                    tabAnything: {},
                    someArray: [1, 2, 3, 4]
                },
                
                
                
                // What does this line of code do? What is ng? ////////////////////////////////////////////////////////////////////
                ng: { // {Object} support for AngularJs directives
                    if: "lang == 'JavaScript' || key == 'HTML5'",
                    show: "",
                    model: "user.name",
                    "model-options": window.JSON.stringify({"1": "2", "a": [1, 2, 3, 4]}).replace(/"/g, "'")
                },
                // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                
               
                ribbons: [{
                    label: "Clipboard", // {String} [required]
                    width: "10%", // {Number|String} [optional] width of the ribbon in pixels, percentage, etc. default: "auto"
                    minWidth: "160px", // {Number|String} [optional] min width of the ribbon in pixels or percentage
                    ng: { // {Object} support for AngularJs directives
                        show: "",
                        if: "user == 'free'",
                        pattern: /^\d+$/,
                        model: "user.name",
                        "model-options": window.JSON.stringify({"1": "2", "a": [1, 2, 3, 4]}).replace(/"/g, "'")
                    },
                    tools: [{
                        type: "split-button", // {String} [required] tool identifier
                        size: "large", // {String} [required] "small" | "large"
                        commands: [{
                            hint: "Paste Options", // {String} [optional] hint for the default item
                            name: "paste", // {String} [required] command identifier
                            label: "Paste", // {String} [required] item label
                            icon: "paste.png", // {String} [optional] item icon
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                a: 1,
                                b: 2
                            }
                        },{
                            name: "paste-special",
                            label: "Paste Special",
                            icon: "paste-special.png",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                c: 3,
                                d: 4
                            }
                        },{
                            name: "paste-from-word",
                            label: "Paste Word",
                            icon: "paste-from-word.png",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                c: [1, 2, 3],
                                d: {
                                    a: []
                                }
                            }
                        },{
                            name: "paste-as-hyperlink",
                            label: "Paste Link",
                            icon: "paste-as-hyperlink.png"
                        },{
                            name: "paste-plain",
                            label: "Paste Plain",
                            icon: "paste-plain.png"
                        }]
                    },{
                        type: "buttons", // {String} [required] tool identifier
                        size: "small", // {String} [required] "small" | "large"
                        items: "break", // {String} [optional] "break" | "floated" items flow. default: "floated"
                        commands: [{
                            name: "cut", // required
                            hint: "Cut (Ctrl+X)", // optional
                            label: "Cut", // optional
                            icon: "cut.png", // required
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                a: 1,
                                b: "cde"
                            }
                        },{
                            name: "copy",
                            hint: "Copy (Ctrl+C)",
                            label: "Copy",
                            icon: "copy.png"
                        },{
                            name: "format-painter",
                            hint: "Format painter",
                            label: "Format Painter",
                            icon: "format-painter.png"
                        }]
                    }]
                },{
                    label: "Font",
                    width: "27%", // {String} [optional] default: "auto"
                    minWidth: "276px", // {Number|String} [optional] min width of the ribbon in pixels
                    ng: { // {Object} support for AngularJs directives
                        if: "lang == 'JavaScript' || key == 'HTML5'",
                        show: ""
                    },
                    tools: [{
                        type: "dropdown", // {String} [required] tool identifier
                        name: "font-family", // {String} [required] command identifier
                        width: 120, // {String|Number} [optional] width of the dropdown in pixels. default: 43 pixels
                        items: [{ // {Array} [required]. the first item will be set as default
                            value: "Arial, Helvetica, Sans-serif", // {String} [required] item value
                            label: "Arial", // {String} [required] item label
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                fontFamily: ["Arial", "Helvetica", "Verdana", "Sans-serif"]
                            }
                        },{
                            label: "Comic Sans MS",
                            value: "Comic Sans MS"
                        },{
                            label: "Consolas",
                            value: "Consolas",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                fontFamily: ["Consolas", "Courier"],
                                isMonospaceFont: true
                            }
                        },{
                            label: "Cambria",
                            value: "Cambria"
                        },{
                            label: "Arial Black",
                            value: "Arial Black"
                        },{
                            label: "Courier",
                            value: "Courier"
                        },{
                            label: "Courier New",
                            value: "Courier New"
                        },{
                            label: "Garamond",
                            value: "Garamond"
                        },{
                            label: "Georgia",
                            value: "Georgia"
                        },{
                            label: "Segoe UI",
                            value: "Segoe UI"
                        },{
                            label: "Segoe UI, Light",
                            value: "Segoe UI, Light"
                        },{
                            label: "Segoe UI Semibold",
                            value: "Segoe UI Semibold"
                        },{
                            label: "Segoe UI Symbol",
                            value: "Segoe UI Symbol"
                        },{
                            label: "Sans-Serif",
                            value: "Sans-Serif"
                        },{
                            label: "Serif",
                            value: "Serif"
                        },{
                            label: "Times New Roman",
                            value: "Times New Roman"
                        },{
                            label: "Trebuchet MS",
                            value: "Trebuchet MS"
                        },{
                            label: "Verdana",
                            value: "Verdana"
                        },{
                            label: "Arial Rounded MT",
                            value: "Arial Rounded MT"
                        },{
                            label: "Nueva Roman",
                            value: "Nueva Roman"
                        },{
                            label: "Helvetica",
                            value: "Helvetica"
                        },{
                            label: "Calibri",
                            value: "Calibri"
                        },{
                            label: "Lucida Console",
                            value: "Lucida Console"
                        },{
                            label: "Calibri Light",
                            value: "Calibri Light"
                        },{
                            label: "Century Gothic",
                            value: "Century Gothic"
                        },{
                            label: "Impact",
                            value: "Impact"
                        }]
                    },{
                        type: "dropdown",
                        name: "font-size",
                        width: 70,
                        items: [{
                            label: 8,
                            value: 8
                        },{
                            label: 9,
                            value: 9
                        },{
                            label: 10,
                            value: 10
                        },{
                            label: 12,
                            value: 12
                        },{
                            label: 14,
                            value: 14
                        },{
                            label: 16,
                            value: 16
                        },{
                            label: 18,
                            value: 18
                        },{
                            label: 20,
                            value: 20
                        },{
                            label: 24,
                            value: 24
                        },{
                            label: 28,
                            value: 28
                        },{
                            label: 32,
                            value: 32
                        }]
                    },{
                        type: "buttons", // {String} [required] tool identifier
                        size: "small", // {String} "small" | "large" [required] button size
                        commands: [{
                            name: "font-grow", // {String} [required] command identifier
                            hint: "Grow Font", // {String} [optional] button hint
                            //label: "Grow Font", // {String} [optional] button label
                            icon: "font-grow.png" // {String} [optional] button icon
                        },{
                            name: "font-shrink",
                            hint: "Shrink Font",
                            icon: "font-shrink.png"
                        },{
                            name: "format-clear",
                            hint: "Clear formatting",
                            icon: "clear-formatting.png"
                        }]
                    },{
                        type: "menu",
                        size: "small",
                        commands: [{ // [required] the first command will be set in the header of the menu
                            name: "change-case", // {String} [required] command identifier
                            hint: "Change case", // {String} [optional] item tooltip
                            icon: "change-case.png", // {String} [required for the first item] menu icon
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                c: [1, 2, 3],
                                d: {
                                    a: []
                                }
                            }
                        },{
                            name: "sentence-case",
                            label: "Sentence case",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                c: [4, 5, 6],
                                d: {
                                    a: {}
                                }
                            }
                        },{
                            name: "lower-case",
                            label: "lowercase"
                        },{
                            name: "uppercase",
                            label: "UPPERCASE"
                        },{
                            name: "capitalize-each-word",
                            label: "Capitalize Each Word"
                        },{
                            name: "toggle-case",
                            label: "tOGGLE cASE"
                        }]
                    },{
                        type: "break"
                    },{
                        type: "color-picker", // {String} [required] tool identifier
                        name: "font-color", // {String} [required] command identifier
                        hint: "Set font color", // {String} [optional] button tooltip
                        icon: "font-color.png", // {String} [required] button icon
                        label: "Font Color", // {String} [optional] button labe;
                        dropdownWidth: 96, // [optional] width in pixels, default: 160 pixels
                        props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                            1: 2,
                            3: 4,
                            5: []
                        },
                        colors: [ // [required] The first color in the array is the default selected one
                            "#000000",
                            "#1f497d",
                            "#4f81bd",
                            "#c0504d",
                            "#9bbb59",
                            "#8064a2",
                            "#c6d9f0",
                            "#dbe5f1",
                            "#f2dcdb",
                            "#ebf1dd",
                            "#ebf1dd",
                            "#001e4e",
                            "#004d60",
                            "#004a00",
                            "#15992a",
                            "#e56c19",
                            "#b81b1b",
                            "#1b58b8",
                            "#569ce3",
                            "#00aaaa"
                        ]
                    },{
                        type: "separator"
                    },{
                        type: "color-picker",
                        name: "highlight-color",
                        hint: "Set background color",
                        icon: "highlight-color.png",
                        label: "Highlight Color",
                        dropdownWidth: 96,
                        colors: [ 
                            "#b00",
                            "#f4b300",
                            "#78ba00",
                            "#2673ec",
                            "#ae113d",
                            "#632f00",
                            "#b01e00",
                            "#7200ac",
                            "#4617b4",
                            "#006ac1"
                        ]
                    },{
                        type: "break"
                    },{
                        type: "exclusive-buttons",
                        size: "small", // {String} [required] "small" | "large" [required] 
                        commands: [{ // {Array} [required]
                            name: "subscript", // {String} [required] command identifier
                            hint: "Subscript", // {String} [optional] button tooltip
                            icon: "subscript.png", // {String} [required] button icon
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                prop1: 123,
                                prop2: "321"
                            }
                        },{
                            name: "superscript",
                            hint: "Superscript",
                            icon: "superscript.png",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                someState: true,
                                anotherState: false
                            }
                        }]
                    },{
                        type: "separator"
                    },{
                        type: "toggle-buttons",
                        size: "small",
                        commands: [{
                            name: "bold", // {String} [required] command identifier
                            hint: "Bold (Ctrl+B)", // [optional] button tooltip
                            //label: "Bold", // {String} [optional] button label
                            icon: "bold.png", // {String} [optional] button icon,
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                b: [1, 2, 3],
                                c: {
                                    ac: 1,
                                    bc: 2
                                }
                            }
                        },{
                            name: "italic",
                            hint: "Italic (Ctrl+I)",
                            icon: "italic.png",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                d: "xyz",
                                e: 123
                            }
                        },{
                            name: "underline",
                            hint: "Underline (Ctrl+U)",
                            icon: "underline.png"
                        },{
                            name: "strikethrough",
                            hint: "Strikethrough",
                            icon: "strikethrough.png"
                        }]
                    }]
                },{
                    label: "Paragraph",
                    width: "15%",
                    minWidth: "200px",
                    tools: [{
                        type: "buttons",
                        size: "small",
                        commands: [{
                            name: "bullets",
                            hint: "Bulleted list",
                            icon: "bullets.png"
                        },{
                            name: "numbers",
                            icon: "numbers.png",
                            hint: "Numbered List"
                        },{
                            name: "multilevel-list",
                            label: "Multilevel List"
                        },{
                            name: "outdent",
                            hint: "Decrease indent",
                            icon: "outdent.png"
                        },{
                            name: "indent",
                            hint: "Increase indent",
                            icon: "indent.png"
                        },{
                            name: "sort",
                            hint: "Sort",
                            icon: "sort.png"
                        }]
                    },{
                        type: "break"
                    },{
                        type: "exclusive-buttons", // {String} [required] tool identifier
                        size: "small", // {String} "small" | "large" button size
                        commands: [{ // {Array} [required] tool commands
                            name: "align-left", // {String} [required] command identifier
                            hint: "Align Left", // {String} [optional] button hint
                            //label: "Align left", // {String} [optional] button label
                            icon: "align-left.png" // {String} [optional] button icon
                        },{
                            name: "align-center",
                            icon: "align-center.png"
                        },{
                            name: "align-right",
                            icon: "align-right.png"
                        },{
                            name: "align-justify",
                            icon: "align-justify.png"
                        }]
                    },{
                        type: "separator"
                    },{
                        type: "buttons",
                        size: "small",
                        commands: [{
                            name: "line-and-paragraph-spacing",
                            hint: "Line and paragraph spacing",
                            icon: "spacing.png"
                        },{
                            name: "toggle",
                            hint: "Show/Hide",
                            icon: "paragraph.png"
                        }]
                    },{
                        type: "separator"
                    },{
                        type: "color-picker",
                        name: "shading",
                        icon: "bucket.png",
                        dropdownWidth: 96,
                        colors: [ 
                            "#ffffff",
                            "#f4b300",
                            "#78ba00",
                            "#2673ec",
                            "#ae113d",
                            "#632f00",
                            "#b01e00",
                            "#7200ac",
                            "#4617b4",
                            "#006ac1",
                            "#008287",
                            "#199900",
                            "#00c13f",
                            "#ff981d",
                            "#ff2e12",
                            "#ff1d77",
                            "#aa40ff",
                            "#1faeff",
                            "#56c5ff",
                            "#00d8cc"
                        ]
                    }]
                },{
                    label: "Styles (As Custom Tool)",
                    width: "20%",
                    minWidth: "315px",
                    tools: [{
                        type: "custom",
                        templateId: "styles_custom_tool_template",  // [required] on-page template in a <script type="html/x-acidjs-ribbon-template" />
                        data: { // required
                            commandName: "my-custom-styles-command", // {String} [required] command identifier
                            styles: [{
                                name: "Normal",
                                value: "NormalStyle",
                                cssClass: "normal-style"
                            },{
                                name: "No Spacing",
                                value: "NoSpacingStyles",
                                cssClass: "no-spacing"
                            },{
                                name: "Heading 1",
                                value: "Heading 1",
                                cssClass: "heading-1"
                            },{
                                name: "Heading 2",
                                value: "Heading 2",
                                cssClass: "heading-1"
                            }]
                        }
                    }]
                },{
                    label: "Editing",
                    tools: [{
                        type: "split-button",
                        size: "small",
                        commands: [{
                            name: "advanced-find",
                            label: "Advanced Find",
                            icon: "find.png"
                        },{
                            name: "find",
                            label: "Find",
                            icon: "find.png"
                        },{
                            name: "go-to",
                            label: "Go to...",
                            icon: "goto.png"
                        }]
                    },{
                        type: "break"
                    },{
                        type: "buttons",
                        size: "small",
                        commands: [{
                            name: "replace",
                            label: "Replace",
                            icon: "replace.png"
                        }]
                    },{
                        type: "break"
                    },{
                        type: "menu",
                        size: "small",
                        commands: [{
                            name: "select", // {String} [required] command identifier
                            label: "Select",
                            icon: "select.png" // {String} [required for the first item] menu icon
                        },{
                            name: "select-all",
                            label: "Select All"
                        },{
                            name: "select-objects",
                            label: "Select Objects"
                        }]
                    }]
                }]
            },{
                label: "More Tools",
                hint: "We've Got More Tools Here...",
                name: "tab-insert",
                enabled: true,
                visible: true,
                ribbons: [{
                    width: "15%",
                    label: "Checkboxes",
                    tools: [{
                        type: "checkbox", // {String} [required] tool identifier
                        label: "Checkbox 1", // {String} [required] tool label
                        name: "checkbox-1", // {String} [required] tool name
                        hint: "Hint for Checkbox 1", // {String} [optional] tool hint
                        value: "checkbox-1-value", // {String} [optional] tool value
                        checked: true // {Boolean} [optional] checked state of the tool
                    },{
                        type: "break"
                    },{
                        type: "checkbox",
                        label: "Checkbox 2",
                        name: "checkbox-2",
                        hint: "Hint for Checkbox 2",
                        value: "checkbox-2-value",
                        props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                            someNumber: 345,
                            someString: "this is a string"
                        }
                    },{
                        type: "break"
                    },{
                        type: "checkbox",
                        label: "Checkbox 3",
                        name: "checkbox-3",
                        hint: "Hint for Checkbox 3",
                        value: "checkbox-3-value"
                    }]
                },{
                    label: "Toggle, Exclusive and Custom Dropdowns",
                    width: "20%",
                    tools: [{
                        type: "toggle-dropdown", // {String} [required] tool type
                        label: "Toggle Dropdown", // {String} [optional] button label
                        icon: "checkbox.png", // {String} [optional] button icon
                        hint: "Toggle dropdown", // {String} [optional] button tooltip
                        name: "toggle-dropdown-1", // {String} [required] tool identifier
                        items: [{
                            name: "menu-bar", // {String} [required] command identifier
                            label: "Menu Bar", // {String} [required] item label
                            selected: true, // {Boolean} [optional] default: false
                            value: "menu-bar-value", // {String} [optional] item value, default: null
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                a: "b",
                                c: "d"
                            }
                        },{
                            name: "bookmarks-toolbar",
                            label: "Bookmarks Toolbar",
                            value: "bookmarks-toolbar-value"
                        },{
                            name: "web-developer-toolbar",
                            label: "Web Developer Toolbar",
                            selected: true,
                            value: "web-developer-toolbar-value",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                e: "f",
                                g: "h"
                            }
                        }]
                    },{
                        type: "break"
                    },{
                        type: "exclusive-dropdown", // {String} [required] tool identifier
                        label: "Exclusive Menu", // {String} [optional] button label
                        icon: "radio.png", // {String} [optional] button icon
                        name: "exclusive-menu-1", // {String} [required] command identifier
                        hint: "Exclusive menu", // {String} [optional] button tooltip
                        defaultSelectedItem: 1, // {Number} [required] default selected item, default: 0
                        items: [{
                            label: "No Style", // {String} [required] item label
                            value: "no-style",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                someValue: 1,
                                anotherValue: 45,
                                someObject: {}
                            }
                        },{
                            label: "Basic Page Style",
                            value: "basic-page-style"
                        },{
                            label: "What?",
                            value: "what",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                what: "what?"
                            }
                        }]
                    },{
                        type: "break"
                    },{
                        type: "custom-dropdown", // {String} [required] tool type
                        label: "My Guitars Dropdown", // {String} [optional] button label
                        icon: "note.png", // {String} [optional] button icon
                        hint: "My custom dropdown with guitars", // {String} [optional] button tooltip
                        name: "my-custom-dropdown-with-guitars", // {String} [required] tool identifier
                        templateId: "my_custom_dropdown_template", // {String} [required] on-page template in a <script type="html/x-acidjs-ribbon-template" />
                        data: { // {Object} [required] data, which should be rendered in the template
                            title: "Custom Dropdown",
                            text: "You can have anything here. Even guitars:",
                            guitars: [
                                "B.C. Rich",
                                "Ibanez",
                                "ESP",
                                "Fender"
                            ]
                        }
                    }]
                },{
                    label: "Radios",
                    width: "10%",
                    tools: [{
                        type: "radios", // {String} [required] tool type
                        defaultSelectedItem: 1, // {Number} [optional] default selected item. default: 0
                        name: "radio-button-group-1", // {String} [required] radio button group name
                        items: [{
                            label: "Radio 1", // {String} [optional] button label
                            value: "value for radio 1", // {String} [optional] tool value
                            hint: "Hint for radio 1", // {optional} [optional] tool hint
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                1: 2,
                                3: 4,
                                a: "b"
                            }
                        },{
                            label: "Radio 2",
                            value: "value for radio 2",
                            hint: "Hint for radio 2",
                            props: { // {Object} [optional] custom tab properties (check http://ribbonjs.com/demos-custom-tool-and-tab-props for more info)
                                c: [1, 2, 3],
                                3: {
                                    someArray: ["a", "b", "c"]
                                },
                                d: "e"
                            }
                        },{
                            label: "Radio 3",
                            value: "value for radio 3",
                            hint: "Hint for radio 3"
                        }]
                    }]
                },{
                    width: "20%",
                    label: "Search and Social",
                    tools: [{
                        type: "split-button",
                        size: "large",
                        commands: [{
                            name: "google",
                            label: "Google",
                            icon: "google.png"
                        },{
                            name: "ask",
                            label: "Ask",
                            icon: "ask.png"
                        },{
                            name: "yahoo",
                            label: "Yahoo",
                            icon: "yahoo.png"
                        },{
                            name: "bing",
                            label: "Bing",
                            icon: "bing.png"
                        },{
                            name: "aol",
                            label: "Aol",
                            icon: "aol.png"
                        }]
                    },{
                        type: "split-button",
                        size: "large",
                        commands: [{
                            name: "twitter",
                            label: "Twitter",
                            icon: "twitter.png"
                        },{
                            name: "google-plus",
                            label: "Google Plus",
                            icon: "plus.png"
                        },{
                            name: "facebook",
                            label: "Fb",
                            icon: "facebook.png"
                        }]
                    },{
                        type: "split-button",
                        size: "large",
                        commands: [{
                            name: "xing",
                            label: "Xing",
                            icon: "xing.png"
                        },{
                            name: "linkedin",
                            label: "Linked In",
                            icon: "linkedin.png"
                        }]
                    },{
                        type: "split-button",
                        size: "large",
                        commands: [{
                            name: "blogger",
                            label: "Blogger",
                            icon: "blogger.png"
                        },{
                            name: "wordpress",
                            label: "WP",
                            icon: "wordpress.png"
                        }]
                    }]
                },{
                    label: "Header & Footer",
                    tools: []
                },{
                    label: "Text",
                    tools: []
                },{
                    label: "Symbols",
                    tools: []
                }]
            },{
                label: "Another Tab",
                hint: "Hint for this other tab",
                name: "tab-page-layout",
                enabled: true,
                visible: true,
                ribbons: [{
                    label: "Themes",
                    tools: []
                },{
                    label: "Page Setup",
                    tools: []
                },{
                    label: "Page Background",
                    tools: []
                },{
                    label: "Paragraph",
                    tools: []
                },{
                    label: "Arrange",
                    tools: []
                }]
            },{
                label: "Draw",
                hint: "Hint for this other tab",
                name: "tab-draw",
                enabled: true,
                visible: true,
                ribbons: [{
                    label: "Themes",
                    tools: []
                },{
                    label: "Page Setup",
                    tools: []
                },{
                    label: "Page Background",
                    tools: []
                },{
                    label: "Paragraph",
                    tools: []
                },{
                    label: "Arrange",
                    tools: []
                }]
            },{
                label: "Something",
                hint: "Hint for this other tab",
                name: "tab-something-layout",
                enabled: true,
                visible: true,
                ribbons: [{
                    label: "Themes",
                    tools: []
                },{
                    label: "Page Setup",
                    tools: []
                },{
                    label: "Page Background",
                    tools: []
                },{
                    label: "Paragraph",
                    tools: []
                },{
                    label: "Arrange",
                    tools: []
                }]
            },{
                label: "Disabled Tab",
                hint: "Disabled Tab",
                name: "tab-references",
                enabled: false,
                ng: { // {Object} support for AngularJs directives
                    disabled: ""
                },
                ribbons: [{
                    label: "Table of Contents",
                    tools: []
                },{
                    label: "Footnotes",
                    tools: []
                },{
                    label: "Citations & Bibliography",
                    tools: []
                },{
                    label: "Captions",
                    tools: []
                },{
                    label: "Index",
                    tools: []
                },{
                    label: "Table of Authorities",
                    tools: []
                }]
            },{
                label: "Mailings",
                hint: "Mailings Tab",
                name: "tab-mailings",
                visible: false,
                ng: { // {Object} support for AngularJs directives
                    hide: ""
                },
                ribbons: [{
                    label: "Create",
                    tools: []
                },{
                    label: "Start Mail Merge",
                    tools: []
                },{
                    label: "Write & Insert Fields",
                    tools: []
                },{
                    label: "Preview Results",
                    tools: []
                },{
                    label: "Finish",
                    tools: []
                }]
            }]
        }
    });
    
    
    /**
     * How to use event handlers. 
     * 1) Create this function, which is an event handler
     * 2) everything has an id, use a switch to notice if you got that id
     * 3) call the apprpitate command
     * 4) profit
     * 
     */
    window.ribbon.getBoundingBox().on("acidjs-ribbon-tool-clicked", function(e, data){
        // window.console.info("acidjs.ribbon event fired", e.type, data);
        console.log("data");
        console.log(data.command);
        
        
        if(data.command == "format-painter"){
            alert("Format Painter Triggered");
        }
        
    });
    
    window.ribbon.getBoundingBox().on("acidjs-ribbon-tab-changed", function(e, data){
        window.console.info("acidjs.ribbon event fired", e.type, data);
    });
    
    window.ribbon.getBoundingBox().on("acidjs-ribbon-toggle", function(e, data){
        window.console.info("acidjs.ribbon event fired", e.type, data);
    });
    
    window.ribbon.getBoundingBox().on("acidjs-ribbon-ready", function(e, data){
        window.console.info("acidjs.ribbon event fired", e.type, data);
        
        // set highlighted tabs group
        //window.ribbon._later(function() {
            //window.ribbon.highlightTabsGroup(["tab-insert", "tab-page-layout"], "font-tools", "Font Tools", "#f00");
            //window.ribbon.highlightTabsGroup(["tab-draw", "tab-something-layout"], "table-tools", "Table Tools", "#006ac1");
        //}, 2000);
        
        // disable the ribbon on ready
        //window.ribbon.disableRibbon();
        
        // hide the ribbon on ready
        //window.ribbon.hide();
        
        // collapse the ribbon on ready
        //window.ribbon.collapse();
        
        // set some tools as active on ready
        window.ribbon.setToolsActive([
            "bold",
            "subscript",
            "underline",
            "align-center"
        ]);
        
        // set some tools as disabled by default
        /*window.ribbon.disableTools([
            "paste",
            "cut",
            "change-case",
            "cut",
            "toggle",
            "line-and-paragraph-spacing",
            "font-shrink",
            "format-painter",
            "paste-from-word",
            "replace",
            "paste",
            "font-family",
            "font-color",
            "toggle-dropdown-1",
            "exclusive-menu-1",
            "my-custom-styles",
            "my-custom-dropdown-with-guitars"
        ]);*/
    });
    
    
    // This line i single creates the ribbion, super important!
    window.ribbon.init();
})();    
