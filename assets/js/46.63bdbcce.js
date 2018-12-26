(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{169:function(s,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"_236-lowestcommonancestorofabinarytree"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_236-lowestcommonancestorofabinarytree","aria-hidden":"true"}},[s._v("#")]),s._v(" 236.LowestCommonAncestorofaBinaryTree")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[s._v("// https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *     this.val = val;\n *     this.left = this.right = null;\n * }\n */")]),s._v("\n"),n("span",{attrs:{class:"token comment"}},[s._v("/**\n * @param {TreeNode} root\n * @param {TreeNode} p\n * @param {TreeNode} q\n * @return {TreeNode}\n */")]),s._v("\n"),n("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),n("span",{attrs:{class:"token function-variable function"}},[s._v("lowestCommonAncestor")]),s._v(" "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("function")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{attrs:{class:"token operator"}},[s._v("!")]),s._v("root"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("null")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root "),n("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" p "),n("span",{attrs:{class:"token operator"}},[s._v("||")]),s._v(" root "),n("span",{attrs:{class:"token operator"}},[s._v("===")]),s._v(" q"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" left "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("lowestCommonAncestor")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("var")]),s._v(" right "),n("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{attrs:{class:"token function"}},[s._v("lowestCommonAncestor")]),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),n("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p"),n("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" q"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left "),n("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" right"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" root"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("left"),n("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" left"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),n("span",{attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{attrs:{class:"token keyword"}},[s._v("return")]),s._v(" right"),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])])])}],!1,null,null,null);r.options.__file="236.LowestCommonAncestorofaBinaryTree.md";t.default=r.exports}}]);