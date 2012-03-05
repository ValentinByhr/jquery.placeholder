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
        var placeholderClass = this.options.placeholderClass,        
           	$this = $(this.element);

        if (!$this.val() || $this.val() === $this.attr('placeholder')) {
                $this.addClass(placeholderClass).val($this.attr('placeholder'));
            }
        });

        // focus and blur of placeholders
        $this.focus(function () {
            var $self = $(this);
            if ($self.val() === $self.attr('placeholder')) {
                $self.val('');
                $self.removeClass(placeholderClass);
            }
        }).blur(function () {
            var $self = $(this);
            if ($self.val() === '' || $self.val() === $self.attr('placeholder')) {
                $self.val($this.attr('placeholder'));
                $self.addClass(placeholderClass);
            }
        });

        // remove placeholders on submit
        $this.closest('form').submit(function () {
            $this.each(function () {
                var $self = $(this);
                if ($self.val() == $self.attr('placeholder')) {
                    $self.val('');
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
