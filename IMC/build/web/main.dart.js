// Generated by DDC, the Dart Development Compiler (to JavaScript).
// Version: 2.19.2 (stable) (Tue Feb 7 18:37:17 2023 +0000) on "linux_x64"
// Module: zapp_user_main
// Flags: soundNullSafety(true), enableAsserts(true)
define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = flutter_sdk.src__material__app;
  const framework = flutter_sdk.src__widgets__framework;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const container = flutter_sdk.src__widgets__container;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const input_border = flutter_sdk.src__material__input_border;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const borders = flutter_sdk.src__painting__borders;
  const text_input = flutter_sdk.src__services__text_input;
  const basic = flutter_sdk.src__widgets__basic;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const rounded_rectangle_border = flutter_sdk.src__painting__rounded_rectangle_border;
  const text$ = flutter_sdk.src__widgets__text;
  const scaffold = flutter_sdk.src__material__scaffold;
  const single_child_scroll_view = flutter_sdk.src__widgets__single_child_scroll_view;
  const flex = flutter_sdk.src__rendering__flex;
  const box_decoration = flutter_sdk.src__painting__box_decoration;
  const image = flutter_sdk.src__widgets__image;
  const box_fit = flutter_sdk.src__painting__box_fit;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var $toString = dartx.toString;
  var $isInfinite = dartx.isInfinite;
  var $isNaN = dartx.isNaN;
  var $toStringAsFixed = dartx.toStringAsFixed;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 4,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 4,
        [EdgeInsets_left]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 2,
        [EdgeInsets_right]: 2,
        [EdgeInsets_top]: 2,
        [EdgeInsets_left]: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 16,
        [EdgeInsets_right]: 16,
        [EdgeInsets_top]: 16,
        [EdgeInsets_left]: 16
      });
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new main.BMICalculator.new()});
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  main.BMICalculator = class BMICalculator extends framework.StatefulWidget {
    createState() {
      return new main._BMICalculatorState.new();
    }
    static ['_#new#tearOff']() {
      return new main.BMICalculator.new();
    }
  };
  (main.BMICalculator.new = function() {
    main.BMICalculator.__proto__.new.call(this);
    ;
  }).prototype = main.BMICalculator.prototype;
  dart.addTypeTests(main.BMICalculator);
  dart.addTypeCaches(main.BMICalculator);
  dart.setMethodSignature(main.BMICalculator, () => ({
    __proto__: dart.getMethods(main.BMICalculator.__proto__),
    createState: dart.fnType(main._BMICalculatorState, [])
  }));
  dart.setLibraryUri(main.BMICalculator, I[0]);
  var _getBMICategory = dart.privateName(main, "_getBMICategory");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  main._BMICalculatorState = class _BMICalculatorState extends framework.State$(main.BMICalculator) {
    calculateBMI() {
      let t0, t0$;
      try {
        let weight = (t0 = core.double.tryParse(this.weightController.text), t0 == null ? -1 : t0);
        let heightCm = (t0$ = core.double.tryParse(this.heightController.text), t0$ == null ? -1 : t0$);
        if (weight <= 0) {
          this.setState(dart.fn(() => {
            this.resultText = "Erro: Peso inválido.";
            this.imagePath = "assets/normal.jpg";
          }, T.VoidTovoid()));
          return;
        }
        if (heightCm <= 0) {
          this.setState(dart.fn(() => {
            this.resultText = "Erro: Altura inválida.";
            this.imagePath = "assets/normal.jpg";
          }, T.VoidTovoid()));
          return;
        }
        let height = heightCm / 100;
        if (height > 0) {
          let bmi = weight / (height * height);
          if (bmi[$isInfinite] || bmi[$isNaN]) {
            this.setState(dart.fn(() => {
              this.resultText = "Erro: Altura inválida.";
              this.imagePath = "assets/normal.jpg";
            }, T.VoidTovoid()));
            return;
          }
          let category = this[_getBMICategory](bmi);
          this.setState(dart.fn(() => {
            this.resultText = "IMC: " + bmi[$toStringAsFixed](2) + " (" + category + ")";
          }, T.VoidTovoid()));
        } else {
          this.setState(dart.fn(() => {
            this.resultText = "Erro: Altura inválida.";
            this.imagePath = "assets/normal.jpg";
          }, T.VoidTovoid()));
        }
      } catch (e$) {
        let e = dart.getThrown(e$);
        if (core.Object.is(e)) {
          this.setState(dart.fn(() => {
            this.resultText = "Erro no cálculo. Verifique os valores.";
            this.imagePath = "assets/normal.jpg";
          }, T.VoidTovoid()));
        } else
          throw e$;
      }
    }
    [_getBMICategory](bmi) {
      if (bmi < 16) {
        this.imagePath = "assets/magro.jpg";
        return "Magreza grau III";
      } else if (bmi >= 16 && bmi < 16.9) {
        this.imagePath = "assets/magro.jpg";
        return "Magreza grau II";
      } else if (bmi >= 17 && bmi < 18.4) {
        this.imagePath = "assets/magro.jpg";
        return "Magreza grau I";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        this.imagePath = "assets/normal.jpg";
        return "Eutrofia";
      } else if (bmi >= 25 && bmi < 29.9) {
        this.imagePath = "assets/obeso.jpg";
        return "Pré-obesidade";
      } else if (bmi >= 30 && bmi < 34.9) {
        this.imagePath = "assets/obeso.jpg";
        return "Obesidade grau I";
      } else if (bmi >= 35 && bmi < 39.9) {
        this.imagePath = "assets/obesso.jpg";
        return "Obesidade grau II";
      } else {
        this.imagePath = "assets/obesso.jpg";
        return "Obesidade grau III";
      }
    }
    handleButtonPress(value) {
      this.setState(dart.fn(() => {
        let t1, t1$;
        if (this.isWeightSelected) {
          t1 = this.weightController;
          t1.text = t1.text + value;
        } else {
          t1$ = this.heightController;
          t1$.text = t1$.text + value;
        }
      }, T.VoidTovoid()));
    }
    toggleField() {
      this.setState(dart.fn(() => {
        this.isWeightSelected = !this.isWeightSelected;
      }, T.VoidTovoid()));
    }
    clearFields() {
      this.setState(dart.fn(() => {
        this.weightController.clear();
        this.heightController.clear();
        this.resultText = "IMC Calculado";
        this.imagePath = "assets/normal.jpg";
      }, T.VoidTovoid()));
    }
    buildInputField(hintText, controller, opts) {
      let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
      return new container.Container.new({margin: C[1] || CT.C1, child: new text_field.TextField.new({controller: controller, decoration: new input_decorator.InputDecoration.new({hintText: hintText, hintStyle: new text_style.TextStyle.new({color: colors.Colors.blue}), filled: true, fillColor: colors.Colors.grey._get(200), border: new input_border.OutlineInputBorder.new({borderRadius: new border_radius.BorderRadius.circular(10), borderSide: borders.BorderSide.none})}), style: new text_style.TextStyle.new({color: colors.Colors.blue}), readOnly: readOnly, keyboardType: text_input.TextInputType.number})});
    }
    buildButton(text, opts) {
      let isEnter = opts && 'isEnter' in opts ? opts.isEnter : false;
      let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
      return new basic.Expanded.new({child: new basic.Padding.new({padding: C[2] || CT.C2, child: new elevated_button.ElevatedButton.new({onPressed: onPressed, style: elevated_button.ElevatedButton.styleFrom({backgroundColor: isEnter ? colors.Colors.blueAccent : colors.Colors.blue, padding: new edge_insets.EdgeInsets.symmetric({vertical: 15}), shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(10)})}), child: new text$.Text.new(text, {style: new text_style.TextStyle.new({fontSize: 20, color: colors.Colors.white})})})})});
    }
    build(context) {
      return new scaffold.Scaffold.new({backgroundColor: colors.Colors.white, body: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Center.new({child: new basic.Padding.new({padding: C[3] || CT.C3, child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: T.JSArrayOfWidget().of([new container.Container.new({width: 1 / 0, padding: new edge_insets.EdgeInsets.symmetric({vertical: 10, horizontal: 10}), decoration: new box_decoration.BoxDecoration.new({color: colors.Colors.blue, borderRadius: new border_radius.BorderRadius.circular(2)}), child: new text$.Text.new("Calculadora IMC", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.white, fontSize: 26, fontWeight: ui.FontWeight.bold})})}), new basic.ClipRRect.new({borderRadius: new border_radius.BorderRadius.circular(2), child: new image.Image.asset(this.imagePath, {height: 150, width: 1 / 0, fit: box_fit.BoxFit.cover})}), new basic.Column.new({children: T.JSArrayOfWidget().of([this.buildInputField("Peso: Digite o Peso", this.weightController), this.buildInputField("Altura: Digite a altura", this.heightController), this.buildInputField(this.resultText, new editable_text.TextEditingController.new(), {readOnly: true})])}), new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([new basic.Row.new({children: T.JSArrayOfWidget().of([this.buildButton("7", {onPressed: dart.fn(() => this.handleButtonPress("7"), T.VoidTovoid())}), this.buildButton("8", {onPressed: dart.fn(() => this.handleButtonPress("8"), T.VoidTovoid())}), this.buildButton("9", {onPressed: dart.fn(() => this.handleButtonPress("9"), T.VoidTovoid())}), this.buildButton("CLEAR", {onPressed: dart.bind(this, 'clearFields')})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([this.buildButton("4", {onPressed: dart.fn(() => this.handleButtonPress("4"), T.VoidTovoid())}), this.buildButton("5", {onPressed: dart.fn(() => this.handleButtonPress("5"), T.VoidTovoid())}), this.buildButton("6", {onPressed: dart.fn(() => this.handleButtonPress("6"), T.VoidTovoid())}), this.buildButton("PROX", {onPressed: dart.bind(this, 'toggleField')})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([this.buildButton("1", {onPressed: dart.fn(() => this.handleButtonPress("1"), T.VoidTovoid())}), this.buildButton("2", {onPressed: dart.fn(() => this.handleButtonPress("2"), T.VoidTovoid())}), this.buildButton("3", {onPressed: dart.fn(() => this.handleButtonPress("3"), T.VoidTovoid())}), this.buildButton("0", {onPressed: dart.fn(() => this.handleButtonPress("0"), T.VoidTovoid())})])}), new basic.Row.new({children: T.JSArrayOfWidget().of([this.buildButton("ENTER", {isEnter: true, onPressed: dart.bind(this, 'calculateBMI')})])})])})])})})})})});
    }
    static ['_#new#tearOff']() {
      return new main._BMICalculatorState.new();
    }
  };
  (main._BMICalculatorState.new = function() {
    this.weightController = new editable_text.TextEditingController.new();
    this.heightController = new editable_text.TextEditingController.new();
    this.resultText = "IMC Calculado";
    this.imagePath = "assets/normal.jpg";
    this.isWeightSelected = true;
    main._BMICalculatorState.__proto__.new.call(this);
    ;
  }).prototype = main._BMICalculatorState.prototype;
  dart.addTypeTests(main._BMICalculatorState);
  dart.addTypeCaches(main._BMICalculatorState);
  dart.setMethodSignature(main._BMICalculatorState, () => ({
    __proto__: dart.getMethods(main._BMICalculatorState.__proto__),
    calculateBMI: dart.fnType(dart.void, []),
    [_getBMICategory]: dart.fnType(core.String, [core.double]),
    handleButtonPress: dart.fnType(dart.void, [core.String]),
    toggleField: dart.fnType(dart.void, []),
    clearFields: dart.fnType(dart.void, []),
    buildInputField: dart.fnType(framework.Widget, [core.String, editable_text.TextEditingController], {readOnly: core.bool}, {}),
    buildButton: dart.fnType(framework.Widget, [core.String], {isEnter: core.bool, onPressed: dart.nullable(dart.fnType(dart.dynamic, []))}, {}),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._BMICalculatorState, I[0]);
  dart.setFieldSignature(main._BMICalculatorState, () => ({
    __proto__: dart.getFields(main._BMICalculatorState.__proto__),
    weightController: dart.fieldType(editable_text.TextEditingController),
    heightController: dart.fieldType(editable_text.TextEditingController),
    resultText: dart.fieldType(core.String),
    imagePath: dart.fieldType(core.String),
    isWeightSelected: dart.fieldType(core.bool)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart"],"names":[],"mappings":"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","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant
  };
}));

//# sourceMappingURL=main.js.map
