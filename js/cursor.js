function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Magnetic = /*#__PURE__*/function () {
  "use strict";

  function Magnetic(el) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Magnetic);

    this.el = $(el);
    this.options = $.extend(true, {
      y: 0.2,
      x: 0.2,
      s: 0.2,
      rs: 0.7
    }, this.el.data('magnetic') || options);
    this.y = 0;
    this.x = 0;
    this.width = 0;
    this.height = 0;
    if (this.el.data('magnetic-init')) return;
    this.el.data('magnetic-init', true);
    this.bind();
  }

  _createClass(Magnetic, [{
    key: "bind",
    value: function bind() {
      var _this = this;

      this.el.on('mouseenter', function () {
        _this.y = _this.el.offset().top - window.pageYOffset;
        _this.x = _this.el.offset().left - window.pageXOffset;
        _this.width = _this.el.outerWidth();
        _this.height = _this.el.outerHeight();
      });
      this.el.on('mousemove', function (e) {
        var y = (e.clientY - _this.y - _this.height / 2) * _this.options.y;
        var x = (e.clientX - _this.x - _this.width / 2) * _this.options.x;

        _this.move(x, y, _this.options.s);
      });
      this.el.on('mouseleave', function (e) {
        _this.move(0, 0, _this.options.rs);
      });
    }
  }, {
    key: "move",
    value: function move(x, y, speed) {
      gsap.to(this.el, {
        y: y,
        x: x,
        force3D: true,
        overwrite: true,
        duration: speed
      });
    }
  }]);

  return Magnetic;
}();

var Cursor = /*#__PURE__*/function () {
  "use strict";

  function Cursor(options) {
    _classCallCheck(this, Cursor);

    this.options = $.extend(true, {
      container: "body",
      speed: 0.7,
      ease: "expo.out",
      visibleTimeout: 300
    }, options);
    this.body = $(this.options.container);
    this.el = $('<div class="cb-cursor"></div>');
    this.text = $('<div class="cb-cursor-text"></div>');
    this.init();
  }

  _createClass(Cursor, [{
    key: "init",
    value: function init() {
      this.el.append(this.text);
      this.body.append(this.el);
      this.bind();
      this.move(-window.innerWidth, -window.innerHeight, 0);
    }
  }, {
    key: "bind",
    value: function bind() {
      var _this2 = this;

      var self = this;
      this.body.on('mouseleave', function () {
        self.hide();
      }).on('mouseenter', function () {
        self.show();
      }).on('mousemove', function (e) {
        _this2.pos = {
          x: _this2.stick ? _this2.stick.x - (_this2.stick.x - e.clientX) * 0.15 : e.clientX,
          y: _this2.stick ? _this2.stick.y - (_this2.stick.y - e.clientY) * 0.15 : e.clientY
        };

        _this2.update();
      }).on('mousedown', function () {
        self.setState('-active');
      }).on('mouseup', function () {
        self.removeState('-active');
      }).on('mouseenter', 'a,input,textarea,button', function () {
        self.setState('-pointer');
      }).on('mouseleave', 'a,input,textarea,button', function () {
        self.removeState('-pointer');
      }).on('mouseenter', 'iframe', function () {
        self.hide();
      }).on('mouseleave', 'iframe', function () {
        self.show();
      }).on('mouseenter', '[data-cursor]', function () {
        self.setState(this.dataset.cursor);
      }).on('mouseleave', '[data-cursor]', function () {
        self.removeState(this.dataset.cursor);
      }).on('mouseenter', '[data-cursor-text]', function () {
        self.setText(this.dataset.cursorText);
      }).on('mouseleave', '[data-cursor-text]', function () {
        self.removeText();
      }).on('mouseenter', '[data-cursor-stick]', function () {
        self.setStick(this.dataset.cursorStick);
      }).on('mouseleave', '[data-cursor-stick]', function () {
        self.removeStick();
      });
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.el.addClass(state);
    }
  }, {
    key: "removeState",
    value: function removeState(state) {
      this.el.removeClass(state);
    }
  }, {
    key: "toggleState",
    value: function toggleState(state) {
      this.el.toggleClass(state);
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.text.html(text);
      this.el.addClass('-text');
    }
  }, {
    key: "removeText",
    value: function removeText() {
      this.el.removeClass('-text');
    }
  }, {
    key: "setStick",
    value: function setStick(el) {
      var target = $(el);
      var bound = target.get(0).getBoundingClientRect();
      this.stick = {
        y: bound.top + target.height() / 2,
        x: bound.left + target.width() / 2
      };
      this.move(this.stick.x, this.stick.y, 5);
    }
  }, {
    key: "removeStick",
    value: function removeStick() {
      this.stick = false;
    }
  }, {
    key: "update",
    value: function update() {
      this.move();
      this.show();
    }
  }, {
    key: "move",
    value: function move(x, y, duration) {
      gsap.to(this.el, {
        x: x || this.pos.x,
        y: y || this.pos.y,
        force3D: true,
        overwrite: true,
        ease: this.options.ease,
        duration: this.visible ? duration || this.options.speed : 0
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      if (this.visible) return;
      clearInterval(this.visibleInt);
      this.el.addClass('-visible');
      this.visibleInt = setTimeout(function () {
        return _this3.visible = true;
      });
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this4 = this;

      clearInterval(this.visibleInt);
      this.el.removeClass('-visible');
      this.visibleInt = setTimeout(function () {
        return _this4.visible = false;
      }, this.options.visibleTimeout);
    }
  }]);

  return Cursor;
}(); // Init cursor


var cursor = new Cursor(); // Init magnetic

$('[data-magnetic]').each(function () {
  new Magnetic(this);
});