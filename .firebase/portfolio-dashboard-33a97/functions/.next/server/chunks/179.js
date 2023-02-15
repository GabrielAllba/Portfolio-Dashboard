exports.id = 179;
exports.ids = [179];
exports.modules = {

/***/ 7903:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__xuGlT"
};


/***/ }),

/***/ 7976:
/***/ ((module) => {

// Exports
module.exports = {
	"custom_container": "Layout_custom_container__PcPXE",
	"relative": "Layout_relative__Rn6VB",
	"fixed": "Layout_fixed__NFRk4",
	"navigation": "Layout_navigation__81SMO",
	"avatar_container": "Layout_avatar_container__nqfpB",
	"link_container": "Layout_link_container__CJapb",
	"avatar": "Layout_avatar__emKcv",
	"image": "Layout_image__OvMOu",
	"margin": "Layout_margin__p_LtG",
	"link_text": "Layout_link_text__Hwt5o",
	"height_100": "Layout_height_100__EGMLt",
	"fix_content": "Layout_fix_content__CIYWz",
	"side": "Layout_side__aZX8j",
	"fixed_left": "Layout_fixed_left__BE6bk",
	"real_sidebar": "Layout_real_sidebar__OFwCv",
	"real_content": "Layout_real_content__xjY4I",
	"icon": "Layout_icon__nvKcL",
	"list": "Layout_list__DlVGR",
	"list_active": "Layout_list_active__SAqZF",
	"nodesign": "Layout_nodesign__PVydu"
};


/***/ }),

/***/ 4179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Layout/index.module.css
var index_module = __webpack_require__(7976);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "@mui/system"
var system_ = __webpack_require__(7986);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/index.module.css
var Button_index_module = __webpack_require__(7903);
var Button_index_module_default = /*#__PURE__*/__webpack_require__.n(Button_index_module);
;// CONCATENATED MODULE: ./components/Button/index.js



function Button(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: (Button_index_module_default()).button,
        onClick: props.onClick,
        children: props.children
    });
}

// EXTERNAL MODULE: ./components/ToggleTheme/index.js
var ToggleTheme = __webpack_require__(2267);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Layout/index.js








function Layout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).relative,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).fixed,
                children: /*#__PURE__*/ jsx_runtime_.jsx(system_.Container, {
                    maxWidth: "xl",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: (index_module_default()).navigation,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    position: "relative",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: (index_module_default()).image,
                                    src: "/img/logo_profile.png",
                                    width: 1000,
                                    height: 1000,
                                    alt: "image",
                                    quality: "100"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (index_module_default()).link_container,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (index_module_default()).margin,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: (index_module_default()).link_text,
                                                children: "Home"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (index_module_default()).margin,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                className: (index_module_default()).link_text,
                                                children: "Logout"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (index_module_default()).margin,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ToggleTheme/* default */.Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).fix_content,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (index_module_default()).side,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (index_module_default()).fixed_left,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (index_module_default()).real_sidebar,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: (index_module_default()).nodesign,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (index_module_default()).list + " " + (index_module_default()).list_active,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                                    className: (index_module_default()).icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Overview"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/profile",
                                        className: (index_module_default()).nodesign,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (index_module_default()).list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                                    className: (index_module_default()).icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Profile"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/skills",
                                        className: (index_module_default()).nodesign,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (index_module_default()).list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                                    className: (index_module_default()).icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Skills"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/ExperiencesWork",
                                        className: (index_module_default()).nodesign,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (index_module_default()).list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                                    className: (index_module_default()).icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Experiences | Work"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/awards",
                                        className: (index_module_default()).nodesign,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: (index_module_default()).list,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiOutlineHome, {
                                                    className: (index_module_default()).icon
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: "Awards"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (index_module_default()).real_content,
                        children: props.children
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;