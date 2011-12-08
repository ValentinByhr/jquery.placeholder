(function ($) {          
    var pluginName = 'placeholder',
        defaults = {
            placeholderClass: 'placeholder'
        };
 
    function Placeholder(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }
 
    Placeholder.prototype.init = function () {
        var $placeholders = $(this.element).find('[placeholder]'),
            placeholderClass = this.options.placeholderClass;
        
        // set placeholder values
        $placeholders.each(function () {
            var $this = $(this);
            
            if (!$this.val()) {
                $this.addClass(placeholderClass).val($this.attr('placeholder'));
            }
        });

        // focus and blur of placeholders
        $placeholders.focus(function () {
            var $this = $(this);
            if ($this.val() === $this.attr('placeholder')) {
                $this.val('');
                $this.removeClass(placeholderClass);
            }
        }).blur(function () {
            var $this = $(this);
            if ($this.val() === '' || $this.val() === $this.attr('placeholder')) {
                $this.val($this.attr('placeholder'));
                $this.addClass(placeholderClass);
            }
        });

        // remove placeholders on submit
        $placeholders.closest('form').submit(function () {
            $placeholders.each(function () {
                var $this = $(this);
                if ($this.val() == $this.attr('placeholder')) {
                    $this.val('');
                }
            });
        });
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Placeholder(this, options));
            }
        });
    }
})(jQuery);

