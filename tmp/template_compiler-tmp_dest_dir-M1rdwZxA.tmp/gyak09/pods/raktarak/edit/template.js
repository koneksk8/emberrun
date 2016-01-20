export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.7",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 6,
          "column": 61
        }
      },
      "moduleName": "gyak09/pods/raktarak/edit/template.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("div");
      dom.setAttribute(el1,"class","page-header");
      var el2 = dom.createTextNode("\n    ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("h1");
      var el3 = dom.createTextNode("Raktár módosítása");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(2);
      morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["inline","log",[["get","model",["loc",[null,[5,6],[5,11]]]]],[],["loc",[null,[5,0],[5,13]]]],
      ["inline","new-raktar-form",[],["onSave",["subexpr","action",["modifyRaktar"],[],["loc",[null,[6,25],[6,48]]]],"data",["subexpr","@mut",[["get","model",["loc",[null,[6,54],[6,59]]]]],[],[]]],["loc",[null,[6,0],[6,61]]]]
    ],
    locals: [],
    templates: []
  };
}()));