// Input 0
function $JSCompiler_alias_THROW$$($jscomp_throw_param$$) {
  throw $jscomp_throw_param$$;
}
var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$60$$, $opt_object$$) {
  var $parts$$ = $name$$60$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
function $goog$getObjectByName$$($name$$61_parts$$1$$) {
  $name$$61_parts$$1$$ = $name$$61_parts$$1$$.split(".");
  for(var $cur$$1$$ = $goog$global$$, $part$$1$$;$part$$1$$ = $name$$61_parts$$1$$.shift();) {
    if($cur$$1$$[$part$$1$$] != $JSCompiler_alias_NULL$$) {
      $cur$$1$$ = $cur$$1$$[$part$$1$$]
    }else {
      return $JSCompiler_alias_NULL$$
    }
  }
  return $cur$$1$$
}
function $goog$nullFunction$$() {
}
function $goog$addSingletonGetter$$($ctor$$) {
  $ctor$$.$getInstance$ = function $$ctor$$$$getInstance$$() {
    return $ctor$$.$instance_$ ? $ctor$$.$instance_$ : $ctor$$.$instance_$ = new $ctor$$
  }
}
function $goog$typeOf$$($value$$47$$) {
  var $s$$2$$ = typeof $value$$47$$;
  if("object" == $s$$2$$) {
    if($value$$47$$) {
      if($value$$47$$ instanceof Array) {
        return"array"
      }
      if($value$$47$$ instanceof Object) {
        return $s$$2$$
      }
      var $className$$2$$ = Object.prototype.toString.call($value$$47$$);
      if("[object Window]" == $className$$2$$) {
        return"object"
      }
      if("[object Array]" == $className$$2$$ || "number" == typeof $value$$47$$.length && "undefined" != typeof $value$$47$$.splice && "undefined" != typeof $value$$47$$.propertyIsEnumerable && !$value$$47$$.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == $className$$2$$ || "undefined" != typeof $value$$47$$.call && "undefined" != typeof $value$$47$$.propertyIsEnumerable && !$value$$47$$.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == $s$$2$$ && "undefined" == typeof $value$$47$$.call) {
      return"object"
    }
  }
  return $s$$2$$
}
function $goog$isDefAndNotNull$$($val$$2$$) {
  return $val$$2$$ != $JSCompiler_alias_NULL$$
}
function $goog$isArray$$($val$$3$$) {
  return"array" == $goog$typeOf$$($val$$3$$)
}
function $goog$isArrayLike$$($val$$4$$) {
  var $type$$52$$ = $goog$typeOf$$($val$$4$$);
  return"array" == $type$$52$$ || "object" == $type$$52$$ && "number" == typeof $val$$4$$.length
}
function $goog$isString$$($val$$6$$) {
  return"string" == typeof $val$$6$$
}
function $goog$isNumber$$($val$$8$$) {
  return"number" == typeof $val$$8$$
}
function $goog$isFunction$$($val$$9$$) {
  return"function" == $goog$typeOf$$($val$$9$$)
}
function $goog$isObject$$($val$$10$$) {
  var $type$$53$$ = typeof $val$$10$$;
  return"object" == $type$$53$$ && $val$$10$$ != $JSCompiler_alias_NULL$$ || "function" == $type$$53$$
}
function $goog$getUid$$($obj$$36$$) {
  return $obj$$36$$[$goog$UID_PROPERTY_$$] || ($obj$$36$$[$goog$UID_PROPERTY_$$] = ++$goog$uidCounter_$$)
}
var $goog$UID_PROPERTY_$$ = "closure_uid_" + (1E9 * Math.random() >>> 0), $goog$uidCounter_$$ = 0;
function $goog$bindNative_$$($fn$$, $selfObj$$1$$, $var_args$$37$$) {
  return $fn$$.call.apply($fn$$.bind, arguments)
}
function $goog$bindJs_$$($fn$$1$$, $selfObj$$2$$, $var_args$$38$$) {
  $fn$$1$$ || $JSCompiler_alias_THROW$$(Error());
  if(2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$$1$$.apply($selfObj$$2$$, $newArgs$$)
    }
  }
  return function() {
    return $fn$$1$$.apply($selfObj$$2$$, arguments)
  }
}
function $goog$bind$$($fn$$2$$, $selfObj$$3$$, $var_args$$39$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply($JSCompiler_alias_NULL$$, arguments)
}
function $goog$partial$$($fn$$3$$, $var_args$$40$$) {
  var $args$$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$$1$$ = Array.prototype.slice.call(arguments);
    $newArgs$$1$$.unshift.apply($newArgs$$1$$, $args$$3$$);
    return $fn$$3$$.apply(this, $newArgs$$1$$)
  }
}
var $goog$now$$ = Date.now || function() {
  return+new Date
};
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$;
  $childCtor$$.prototype.constructor = $childCtor$$
}
;
// Input 1
// Input 2
// Input 3
function $goog$string$isEmpty$$($str$$16$$) {
  return/^[\s\xa0]*$/.test($str$$16$$)
}
function $goog$string$trim$$($str$$27$$) {
  return $str$$27$$.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function $goog$string$htmlEscape$$($str$$33$$) {
  if(!$goog$string$allRe_$$.test($str$$33$$)) {
    return $str$$33$$
  }
  -1 != $str$$33$$.indexOf("&") && ($str$$33$$ = $str$$33$$.replace($goog$string$amperRe_$$, "&amp;"));
  -1 != $str$$33$$.indexOf("<") && ($str$$33$$ = $str$$33$$.replace($goog$string$ltRe_$$, "&lt;"));
  -1 != $str$$33$$.indexOf(">") && ($str$$33$$ = $str$$33$$.replace($goog$string$gtRe_$$, "&gt;"));
  -1 != $str$$33$$.indexOf('"') && ($str$$33$$ = $str$$33$$.replace($goog$string$quotRe_$$, "&quot;"));
  return $str$$33$$
}
var $goog$string$amperRe_$$ = /&/g, $goog$string$ltRe_$$ = /</g, $goog$string$gtRe_$$ = />/g, $goog$string$quotRe_$$ = /\"/g, $goog$string$allRe_$$ = /[&<>\"]/;
function $goog$string$toNumber$$($str$$43$$) {
  var $num$$5$$ = Number($str$$43$$);
  return 0 == $num$$5$$ && $goog$string$isEmpty$$($str$$43$$) ? NaN : $num$$5$$
}
function $goog$string$toCamelCase$$($str$$44$$) {
  return String($str$$44$$).replace(/\-([a-z])/g, function($all$$, $match$$) {
    return $match$$.toUpperCase()
  })
}
function $goog$string$toTitleCase$$($str$$46$$) {
  var $delimiters$$ = $goog$isString$$($JSCompiler_alias_VOID$$) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return $str$$46$$.replace(RegExp("(^" + ($delimiters$$ ? "|[" + $delimiters$$ + "]+" : "") + ")([a-z])", "g"), function($all$$1$$, $p1$$, $p2$$) {
    return $p1$$ + $p2$$.toUpperCase()
  })
}
;
// Input 4
// Input 5
var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$indexOf$$ = $goog$array$ARRAY_PROTOTYPE_$$.indexOf ? function($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.indexOf.call($arr$$16$$, $obj$$40$$, $opt_fromIndex$$6$$)
} : function($arr$$17$$, $obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$) {
  $fromIndex$$2_i$$12_opt_fromIndex$$7$$ = $fromIndex$$2_i$$12_opt_fromIndex$$7$$ == $JSCompiler_alias_NULL$$ ? 0 : 0 > $fromIndex$$2_i$$12_opt_fromIndex$$7$$ ? Math.max(0, $arr$$17$$.length + $fromIndex$$2_i$$12_opt_fromIndex$$7$$) : $fromIndex$$2_i$$12_opt_fromIndex$$7$$;
  if($goog$isString$$($arr$$17$$)) {
    return!$goog$isString$$($obj$$41$$) || 1 != $obj$$41$$.length ? -1 : $arr$$17$$.indexOf($obj$$41$$, $fromIndex$$2_i$$12_opt_fromIndex$$7$$)
  }
  for(;$fromIndex$$2_i$$12_opt_fromIndex$$7$$ < $arr$$17$$.length;$fromIndex$$2_i$$12_opt_fromIndex$$7$$++) {
    if($fromIndex$$2_i$$12_opt_fromIndex$$7$$ in $arr$$17$$ && $arr$$17$$[$fromIndex$$2_i$$12_opt_fromIndex$$7$$] === $obj$$41$$) {
      return $fromIndex$$2_i$$12_opt_fromIndex$$7$$
    }
  }
  return-1
}, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$20$$, $f$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$20$$, $f$$, $opt_obj$$1$$)
} : function($arr$$21$$, $f$$1$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$21$$.length, $arr2$$ = $goog$isString$$($arr$$21$$) ? $arr$$21$$.split("") : $arr$$21$$, $i$$14$$ = 0;$i$$14$$ < $l$$2$$;$i$$14$$++) {
    $i$$14$$ in $arr2$$ && $f$$1$$.call($opt_obj$$2$$, $arr2$$[$i$$14$$], $i$$14$$, $arr$$21$$)
  }
}, $goog$array$filter$$ = $goog$array$ARRAY_PROTOTYPE_$$.filter ? function($arr$$23$$, $f$$3$$, $opt_obj$$4$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.filter.call($arr$$23$$, $f$$3$$, $opt_obj$$4$$)
} : function($arr$$24$$, $f$$4$$, $opt_obj$$5$$) {
  for(var $l$$4$$ = $arr$$24$$.length, $res$$ = [], $resLength$$ = 0, $arr2$$2$$ = $goog$isString$$($arr$$24$$) ? $arr$$24$$.split("") : $arr$$24$$, $i$$16$$ = 0;$i$$16$$ < $l$$4$$;$i$$16$$++) {
    if($i$$16$$ in $arr2$$2$$) {
      var $val$$11$$ = $arr2$$2$$[$i$$16$$];
      $f$$4$$.call($opt_obj$$5$$, $val$$11$$, $i$$16$$, $arr$$24$$) && ($res$$[$resLength$$++] = $val$$11$$)
    }
  }
  return $res$$
}, $goog$array$map$$ = $goog$array$ARRAY_PROTOTYPE_$$.map ? function($arr$$25$$, $f$$5$$, $opt_obj$$6$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.map.call($arr$$25$$, $f$$5$$, $opt_obj$$6$$)
} : function($arr$$26$$, $f$$6$$, $opt_obj$$7$$) {
  for(var $l$$5$$ = $arr$$26$$.length, $res$$1$$ = Array($l$$5$$), $arr2$$3$$ = $goog$isString$$($arr$$26$$) ? $arr$$26$$.split("") : $arr$$26$$, $i$$17$$ = 0;$i$$17$$ < $l$$5$$;$i$$17$$++) {
    $i$$17$$ in $arr2$$3$$ && ($res$$1$$[$i$$17$$] = $f$$6$$.call($opt_obj$$7$$, $arr2$$3$$[$i$$17$$], $i$$17$$, $arr$$26$$))
  }
  return $res$$1$$
}, $goog$array$every$$ = $goog$array$ARRAY_PROTOTYPE_$$.every ? function($arr$$31$$, $f$$11$$, $opt_obj$$12$$) {
  return $goog$array$ARRAY_PROTOTYPE_$$.every.call($arr$$31$$, $f$$11$$, $opt_obj$$12$$)
} : function($arr$$32$$, $f$$12$$, $opt_obj$$13$$) {
  for(var $l$$7$$ = $arr$$32$$.length, $arr2$$5$$ = $goog$isString$$($arr$$32$$) ? $arr$$32$$.split("") : $arr$$32$$, $i$$19$$ = 0;$i$$19$$ < $l$$7$$;$i$$19$$++) {
    if($i$$19$$ in $arr2$$5$$ && !$f$$12$$.call($opt_obj$$13$$, $arr2$$5$$[$i$$19$$], $i$$19$$, $arr$$32$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$array$find$$($arr$$35$$, $f$$14_i$$20$$, $opt_obj$$15$$) {
  $f$$14_i$$20$$ = $goog$array$findIndex$$($arr$$35$$, $f$$14_i$$20$$, $opt_obj$$15$$);
  return 0 > $f$$14_i$$20$$ ? $JSCompiler_alias_NULL$$ : $goog$isString$$($arr$$35$$) ? $arr$$35$$.charAt($f$$14_i$$20$$) : $arr$$35$$[$f$$14_i$$20$$]
}
function $goog$array$findIndex$$($arr$$36$$, $f$$15$$, $opt_obj$$16$$) {
  for(var $l$$8$$ = $arr$$36$$.length, $arr2$$6$$ = $goog$isString$$($arr$$36$$) ? $arr$$36$$.split("") : $arr$$36$$, $i$$21$$ = 0;$i$$21$$ < $l$$8$$;$i$$21$$++) {
    if($i$$21$$ in $arr2$$6$$ && $f$$15$$.call($opt_obj$$16$$, $arr2$$6$$[$i$$21$$], $i$$21$$, $arr$$36$$)) {
      return $i$$21$$
    }
  }
  return-1
}
function $goog$array$contains$$($arr$$39$$, $obj$$44$$) {
  return 0 <= $goog$array$indexOf$$($arr$$39$$, $obj$$44$$)
}
function $goog$array$remove$$($arr$$46$$, $obj$$48$$) {
  var $i$$26$$ = $goog$array$indexOf$$($arr$$46$$, $obj$$48$$);
  0 <= $i$$26$$ && $goog$array$ARRAY_PROTOTYPE_$$.splice.call($arr$$46$$, $i$$26$$, 1)
}
function $goog$array$toArray$$($object$$2$$) {
  var $length$$15$$ = $object$$2$$.length;
  if(0 < $length$$15$$) {
    for(var $rv$$3$$ = Array($length$$15$$), $i$$29$$ = 0;$i$$29$$ < $length$$15$$;$i$$29$$++) {
      $rv$$3$$[$i$$29$$] = $object$$2$$[$i$$29$$]
    }
    return $rv$$3$$
  }
  return[]
}
function $goog$array$splice$$($arr$$49$$, $index$$50$$, $howMany$$, $var_args$$55$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.splice.apply($arr$$49$$, $goog$array$slice$$(arguments, 1))
}
function $goog$array$slice$$($arr$$50$$, $start$$6$$, $opt_end$$13$$) {
  return 2 >= arguments.length ? $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$) : $goog$array$ARRAY_PROTOTYPE_$$.slice.call($arr$$50$$, $start$$6$$, $opt_end$$13$$)
}
;
// Input 6
var $goog$dom$defaultDomHelper_$$;
function $goog$dom$classes$get$$($className$$5_element$$9$$) {
  $className$$5_element$$9$$ = $className$$5_element$$9$$.className;
  return $goog$isString$$($className$$5_element$$9$$) && $className$$5_element$$9$$.match(/\S+/g) || []
}
function $goog$dom$classes$add$$($element$$10$$, $var_args$$58$$) {
  for(var $classes$$ = $goog$dom$classes$get$$($element$$10$$), $args$$6_args$$inline_67$$ = $goog$array$slice$$(arguments, 1), $expectedCount$$ = $classes$$.length + $args$$6_args$$inline_67$$.length, $classes$$inline_66$$ = $classes$$, $i$$inline_68$$ = 0;$i$$inline_68$$ < $args$$6_args$$inline_67$$.length;$i$$inline_68$$++) {
    $goog$array$contains$$($classes$$inline_66$$, $args$$6_args$$inline_67$$[$i$$inline_68$$]) || $classes$$inline_66$$.push($args$$6_args$$inline_67$$[$i$$inline_68$$])
  }
  $element$$10$$.className = $classes$$.join(" ");
  return $classes$$.length == $expectedCount$$
}
function $goog$dom$classes$remove$$($element$$11$$, $var_args$$59$$) {
  var $classes$$1$$ = $goog$dom$classes$get$$($element$$11$$), $args$$7$$ = $goog$array$slice$$(arguments, 1), $newClasses$$ = $goog$dom$classes$getDifference_$$($classes$$1$$, $args$$7$$);
  $element$$11$$.className = $newClasses$$.join(" ");
  return $newClasses$$.length == $classes$$1$$.length - $args$$7$$.length
}
function $goog$dom$classes$getDifference_$$($arr1$$4$$, $arr2$$12$$) {
  return $goog$array$filter$$($arr1$$4$$, function($item$$) {
    return!$goog$array$contains$$($arr2$$12$$, $item$$)
  })
}
;
// Input 7
function $goog$object$forEach$$($obj$$49$$, $f$$19$$, $opt_obj$$22$$) {
  for(var $key$$21$$ in $obj$$49$$) {
    $f$$19$$.call($opt_obj$$22$$, $obj$$49$$[$key$$21$$], $key$$21$$, $obj$$49$$)
  }
}
function $goog$object$getValues$$($obj$$58$$) {
  var $res$$4$$ = [], $i$$43$$ = 0, $key$$29$$;
  for($key$$29$$ in $obj$$58$$) {
    $res$$4$$[$i$$43$$++] = $obj$$58$$[$key$$29$$]
  }
  return $res$$4$$
}
function $goog$object$getKeys$$($obj$$59$$) {
  var $res$$5$$ = [], $i$$44$$ = 0, $key$$30$$;
  for($key$$30$$ in $obj$$59$$) {
    $res$$5$$[$i$$44$$++] = $key$$30$$
  }
  return $res$$5$$
}
function $goog$object$findKey$$($obj$$63$$, $f$$24$$) {
  for(var $key$$33$$ in $obj$$63$$) {
    if($f$$24$$.call($JSCompiler_alias_VOID$$, $obj$$63$$[$key$$33$$], $key$$33$$, $obj$$63$$)) {
      return $key$$33$$
    }
  }
}
function $goog$object$isEmpty$$() {
  var $obj$$65$$ = $goog$fx$anim$activeAnimations_$$, $key$$35$$;
  for($key$$35$$ in $obj$$65$$) {
    return $JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_alias_TRUE$$
}
function $goog$object$add$$($obj$$68$$, $key$$37$$, $val$$18$$) {
  $key$$37$$ in $obj$$68$$ && $JSCompiler_alias_THROW$$(Error('The object already contains the key "' + $key$$37$$ + '"'));
  $obj$$68$$[$key$$37$$] = $val$$18$$
}
function $goog$object$get$$($obj$$69$$, $key$$38$$, $opt_val$$) {
  return $key$$38$$ in $obj$$69$$ ? $obj$$69$$[$key$$38$$] : $opt_val$$
}
var $goog$object$PROTOTYPE_FIELDS_$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $goog$object$extend$$($target$$48$$, $var_args$$61$$) {
  for(var $key$$44$$, $source$$2$$, $i$$47$$ = 1;$i$$47$$ < arguments.length;$i$$47$$++) {
    $source$$2$$ = arguments[$i$$47$$];
    for($key$$44$$ in $source$$2$$) {
      $target$$48$$[$key$$44$$] = $source$$2$$[$key$$44$$]
    }
    for(var $j$$4$$ = 0;$j$$4$$ < $goog$object$PROTOTYPE_FIELDS_$$.length;$j$$4$$++) {
      $key$$44$$ = $goog$object$PROTOTYPE_FIELDS_$$[$j$$4$$], Object.prototype.hasOwnProperty.call($source$$2$$, $key$$44$$) && ($target$$48$$[$key$$44$$] = $source$$2$$[$key$$44$$])
    }
  }
}
;
// Input 8
// Input 9
var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : $JSCompiler_alias_NULL$$
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_80$$;
if($ua$$inline_80$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_81$$ = $goog$global$$.navigator;
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_80$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_80$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_80$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_81$$.product
}
var $goog$userAgent$OPERA$$ = $goog$userAgent$detectedOpera_$$, $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$, $navigator$$inline_83$$ = $goog$global$$.navigator, $goog$userAgent$MAC$$ = -1 != ($navigator$$inline_83$$ && $navigator$$inline_83$$.platform || "").indexOf("Mac");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$$4$$ = $goog$global$$.document;
  return $doc$$4$$ ? $doc$$4$$.documentMode : $JSCompiler_alias_VOID$$
}
var $goog$userAgent$VERSION$$;
a: {
  var $version$$inline_86$$ = "", $re$$inline_87$$;
  if($goog$userAgent$OPERA$$ && $goog$global$$.opera) {
    var $operaVersion$$inline_88$$ = $goog$global$$.opera.version, $version$$inline_86$$ = "function" == typeof $operaVersion$$inline_88$$ ? $operaVersion$$inline_88$$() : $operaVersion$$inline_88$$
  }else {
    if($goog$userAgent$GECKO$$ ? $re$$inline_87$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_87$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_87$$ = /WebKit\/(\S+)/), $re$$inline_87$$) {
      var $arr$$inline_89$$ = $re$$inline_87$$.exec($goog$userAgent$getUserAgentString$$()), $version$$inline_86$$ = $arr$$inline_89$$ ? $arr$$inline_89$$[1] : ""
    }
  }
  if($goog$userAgent$IE$$) {
    var $docMode$$inline_90$$ = $goog$userAgent$getDocumentMode_$$();
    if($docMode$$inline_90$$ > parseFloat($version$$inline_86$$)) {
      $goog$userAgent$VERSION$$ = String($docMode$$inline_90$$);
      break a
    }
  }
  $goog$userAgent$VERSION$$ = $version$$inline_86$$
}
var $goog$userAgent$isVersionCache_$$ = {};
function $goog$userAgent$isVersion$$($version$$8$$) {
  var $JSCompiler_temp$$58_order$$inline_94$$;
  if(!($JSCompiler_temp$$58_order$$inline_94$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$])) {
    $JSCompiler_temp$$58_order$$inline_94$$ = 0;
    for(var $v1Subs$$inline_95$$ = $goog$string$trim$$(String($goog$userAgent$VERSION$$)).split("."), $v2Subs$$inline_96$$ = $goog$string$trim$$(String($version$$8$$)).split("."), $subCount$$inline_97$$ = Math.max($v1Subs$$inline_95$$.length, $v2Subs$$inline_96$$.length), $subIdx$$inline_98$$ = 0;0 == $JSCompiler_temp$$58_order$$inline_94$$ && $subIdx$$inline_98$$ < $subCount$$inline_97$$;$subIdx$$inline_98$$++) {
      var $v1Sub$$inline_99$$ = $v1Subs$$inline_95$$[$subIdx$$inline_98$$] || "", $v2Sub$$inline_100$$ = $v2Subs$$inline_96$$[$subIdx$$inline_98$$] || "", $v1CompParser$$inline_101$$ = RegExp("(\\d*)(\\D*)", "g"), $v2CompParser$$inline_102$$ = RegExp("(\\d*)(\\D*)", "g");
      do {
        var $v1Comp$$inline_103$$ = $v1CompParser$$inline_101$$.exec($v1Sub$$inline_99$$) || ["", "", ""], $v2Comp$$inline_104$$ = $v2CompParser$$inline_102$$.exec($v2Sub$$inline_100$$) || ["", "", ""];
        if(0 == $v1Comp$$inline_103$$[0].length && 0 == $v2Comp$$inline_104$$[0].length) {
          break
        }
        $JSCompiler_temp$$58_order$$inline_94$$ = ((0 == $v1Comp$$inline_103$$[1].length ? 0 : parseInt($v1Comp$$inline_103$$[1], 10)) < (0 == $v2Comp$$inline_104$$[1].length ? 0 : parseInt($v2Comp$$inline_104$$[1], 10)) ? -1 : (0 == $v1Comp$$inline_103$$[1].length ? 0 : parseInt($v1Comp$$inline_103$$[1], 10)) > (0 == $v2Comp$$inline_104$$[1].length ? 0 : parseInt($v2Comp$$inline_104$$[1], 10)) ? 1 : 0) || ((0 == $v1Comp$$inline_103$$[2].length) < (0 == $v2Comp$$inline_104$$[2].length) ? -1 : (0 == 
        $v1Comp$$inline_103$$[2].length) > (0 == $v2Comp$$inline_104$$[2].length) ? 1 : 0) || ($v1Comp$$inline_103$$[2] < $v2Comp$$inline_104$$[2] ? -1 : $v1Comp$$inline_103$$[2] > $v2Comp$$inline_104$$[2] ? 1 : 0)
      }while(0 == $JSCompiler_temp$$58_order$$inline_94$$)
    }
    $JSCompiler_temp$$58_order$$inline_94$$ = $goog$userAgent$isVersionCache_$$[$version$$8$$] = 0 <= $JSCompiler_temp$$58_order$$inline_94$$
  }
  return $JSCompiler_temp$$58_order$$inline_94$$
}
var $doc$$inline_106$$ = $goog$global$$.document, $goog$userAgent$DOCUMENT_MODE$$ = !$doc$$inline_106$$ || !$goog$userAgent$IE$$ ? $JSCompiler_alias_VOID$$ : $goog$userAgent$getDocumentMode_$$() || ("CSS1Compat" == $doc$$inline_106$$.compatMode ? parseInt($goog$userAgent$VERSION$$, 10) : 5);
// Input 10
// Input 11
var $goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ = !$goog$userAgent$GECKO$$ && !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$ || $goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9.1"), $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");
// Input 12
// Input 13
// Input 14
function $goog$dom$getDomHelper$$($opt_element$$10$$) {
  return $opt_element$$10$$ ? new $goog$dom$DomHelper$$($goog$dom$getOwnerDocument$$($opt_element$$10$$)) : $goog$dom$defaultDomHelper_$$ || ($goog$dom$defaultDomHelper_$$ = new $goog$dom$DomHelper$$)
}
function $goog$dom$getElement$$($element$$17$$) {
  return $goog$isString$$($element$$17$$) ? document.getElementById($element$$17$$) : $element$$17$$
}
function $goog$dom$getElementsByClass$$($className$$9$$, $opt_el$$1$$) {
  var $parent$$2$$ = $opt_el$$1$$ || document;
  return $parent$$2$$.querySelectorAll && $parent$$2$$.querySelector ? $parent$$2$$.querySelectorAll("." + $className$$9$$) : $parent$$2$$.getElementsByClassName ? $parent$$2$$.getElementsByClassName($className$$9$$) : $goog$dom$getElementsByTagNameAndClass_$$("*", $className$$9$$, $opt_el$$1$$)
}
function $goog$dom$getElementsByTagNameAndClass_$$($className$$11_opt_tag$$1_tagName$$1$$, $opt_class$$1$$, $els_opt_el$$3_parent$$5$$) {
  var $arrayLike_doc$$6$$ = document;
  $els_opt_el$$3_parent$$5$$ = $els_opt_el$$3_parent$$5$$ || $arrayLike_doc$$6$$;
  $className$$11_opt_tag$$1_tagName$$1$$ = $className$$11_opt_tag$$1_tagName$$1$$ && "*" != $className$$11_opt_tag$$1_tagName$$1$$ ? $className$$11_opt_tag$$1_tagName$$1$$.toUpperCase() : "";
  if($els_opt_el$$3_parent$$5$$.querySelectorAll && $els_opt_el$$3_parent$$5$$.querySelector && ($className$$11_opt_tag$$1_tagName$$1$$ || $opt_class$$1$$)) {
    return $els_opt_el$$3_parent$$5$$.querySelectorAll($className$$11_opt_tag$$1_tagName$$1$$ + ($opt_class$$1$$ ? "." + $opt_class$$1$$ : ""))
  }
  if($opt_class$$1$$ && $els_opt_el$$3_parent$$5$$.getElementsByClassName) {
    $els_opt_el$$3_parent$$5$$ = $els_opt_el$$3_parent$$5$$.getElementsByClassName($opt_class$$1$$);
    if($className$$11_opt_tag$$1_tagName$$1$$) {
      for(var $arrayLike_doc$$6$$ = {}, $len$$ = 0, $i$$51$$ = 0, $el$$1$$;$el$$1$$ = $els_opt_el$$3_parent$$5$$[$i$$51$$];$i$$51$$++) {
        $className$$11_opt_tag$$1_tagName$$1$$ == $el$$1$$.nodeName && ($arrayLike_doc$$6$$[$len$$++] = $el$$1$$)
      }
      $arrayLike_doc$$6$$.length = $len$$;
      return $arrayLike_doc$$6$$
    }
    return $els_opt_el$$3_parent$$5$$
  }
  $els_opt_el$$3_parent$$5$$ = $els_opt_el$$3_parent$$5$$.getElementsByTagName($className$$11_opt_tag$$1_tagName$$1$$ || "*");
  if($opt_class$$1$$) {
    $arrayLike_doc$$6$$ = {};
    for($i$$51$$ = $len$$ = 0;$el$$1$$ = $els_opt_el$$3_parent$$5$$[$i$$51$$];$i$$51$$++) {
      $className$$11_opt_tag$$1_tagName$$1$$ = $el$$1$$.className, "function" == typeof $className$$11_opt_tag$$1_tagName$$1$$.split && $goog$array$contains$$($className$$11_opt_tag$$1_tagName$$1$$.split(/\s+/), $opt_class$$1$$) && ($arrayLike_doc$$6$$[$len$$++] = $el$$1$$)
    }
    $arrayLike_doc$$6$$.length = $len$$;
    return $arrayLike_doc$$6$$
  }
  return $els_opt_el$$3_parent$$5$$
}
function $goog$dom$setProperties$$($element$$18$$, $properties$$3$$) {
  $goog$object$forEach$$($properties$$3$$, function($val$$20$$, $key$$45$$) {
    "style" == $key$$45$$ ? $element$$18$$.style.cssText = $val$$20$$ : "class" == $key$$45$$ ? $element$$18$$.className = $val$$20$$ : "for" == $key$$45$$ ? $element$$18$$.htmlFor = $val$$20$$ : $key$$45$$ in $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ ? $element$$18$$.setAttribute($goog$dom$DIRECT_ATTRIBUTE_MAP_$$[$key$$45$$], $val$$20$$) : 0 == $key$$45$$.lastIndexOf("aria-", 0) || 0 == $key$$45$$.lastIndexOf("data-", 0) ? $element$$18$$.setAttribute($key$$45$$, $val$$20$$) : $element$$18$$[$key$$45$$] = 
    $val$$20$$
  })
}
var $goog$dom$DIRECT_ATTRIBUTE_MAP_$$ = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function $goog$dom$createDom$$($tagName$$2$$, $opt_attributes$$, $var_args$$67$$) {
  return $goog$dom$createDom_$$(document, arguments)
}
function $goog$dom$createDom_$$($doc$$12$$, $args$$9$$) {
  var $element$$19_tagName$$3_tagNameArr$$ = $args$$9$$[0], $attributes$$ = $args$$9$$[1];
  if(!$goog$dom$BrowserFeature$CAN_ADD_NAME_OR_TYPE_ATTRIBUTES$$ && $attributes$$ && ($attributes$$.name || $attributes$$.type)) {
    $element$$19_tagName$$3_tagNameArr$$ = ["<", $element$$19_tagName$$3_tagNameArr$$];
    $attributes$$.name && $element$$19_tagName$$3_tagNameArr$$.push(' name="', $goog$string$htmlEscape$$($attributes$$.name), '"');
    if($attributes$$.type) {
      $element$$19_tagName$$3_tagNameArr$$.push(' type="', $goog$string$htmlEscape$$($attributes$$.type), '"');
      var $clone$$2$$ = {};
      $goog$object$extend$$($clone$$2$$, $attributes$$);
      delete $clone$$2$$.type;
      $attributes$$ = $clone$$2$$
    }
    $element$$19_tagName$$3_tagNameArr$$.push(">");
    $element$$19_tagName$$3_tagNameArr$$ = $element$$19_tagName$$3_tagNameArr$$.join("")
  }
  $element$$19_tagName$$3_tagNameArr$$ = $doc$$12$$.createElement($element$$19_tagName$$3_tagNameArr$$);
  $attributes$$ && ($goog$isString$$($attributes$$) ? $element$$19_tagName$$3_tagNameArr$$.className = $attributes$$ : $goog$isArray$$($attributes$$) ? $goog$dom$classes$add$$.apply($JSCompiler_alias_NULL$$, [$element$$19_tagName$$3_tagNameArr$$].concat($attributes$$)) : $goog$dom$setProperties$$($element$$19_tagName$$3_tagNameArr$$, $attributes$$));
  2 < $args$$9$$.length && $goog$dom$append_$$($doc$$12$$, $element$$19_tagName$$3_tagNameArr$$, $args$$9$$);
  return $element$$19_tagName$$3_tagNameArr$$
}
function $goog$dom$append_$$($doc$$13$$, $parent$$6$$, $args$$10$$) {
  function $childHandler$$($child$$1$$) {
    $child$$1$$ && $parent$$6$$.appendChild($goog$isString$$($child$$1$$) ? $doc$$13$$.createTextNode($child$$1$$) : $child$$1$$)
  }
  for(var $i$$52$$ = 2;$i$$52$$ < $args$$10$$.length;$i$$52$$++) {
    var $arg$$5$$ = $args$$10$$[$i$$52$$];
    $goog$isArrayLike$$($arg$$5$$) && !($goog$isObject$$($arg$$5$$) && 0 < $arg$$5$$.nodeType) ? $goog$array$forEach$$($goog$dom$isNodeList$$($arg$$5$$) ? $goog$array$toArray$$($arg$$5$$) : $arg$$5$$, $childHandler$$) : $childHandler$$($arg$$5$$)
  }
}
function $goog$dom$appendChild$$($parent$$7$$, $child$$2$$) {
  $parent$$7$$.appendChild($child$$2$$)
}
function $goog$dom$removeChildren$$($node$$6$$) {
  for(var $child$$3$$;$child$$3$$ = $node$$6$$.firstChild;) {
    $node$$6$$.removeChild($child$$3$$)
  }
}
function $goog$dom$removeNode$$($node$$7$$) {
  $node$$7$$ && $node$$7$$.parentNode && $node$$7$$.parentNode.removeChild($node$$7$$)
}
function $goog$dom$getFirstElementChild$$($node$$9$$) {
  return $node$$9$$.firstElementChild != $JSCompiler_alias_VOID$$ ? $node$$9$$.firstElementChild : $goog$dom$getNextElementNode_$$($node$$9$$.firstChild)
}
function $goog$dom$getNextElementNode_$$($node$$13$$) {
  for(;$node$$13$$ && 1 != $node$$13$$.nodeType;) {
    $node$$13$$ = $node$$13$$.nextSibling
  }
  return $node$$13$$
}
function $goog$dom$contains$$($parent$$13$$, $descendant$$) {
  if($parent$$13$$.contains && 1 == $descendant$$.nodeType) {
    return $parent$$13$$ == $descendant$$ || $parent$$13$$.contains($descendant$$)
  }
  if("undefined" != typeof $parent$$13$$.compareDocumentPosition) {
    return $parent$$13$$ == $descendant$$ || Boolean($parent$$13$$.compareDocumentPosition($descendant$$) & 16)
  }
  for(;$descendant$$ && $parent$$13$$ != $descendant$$;) {
    $descendant$$ = $descendant$$.parentNode
  }
  return $descendant$$ == $parent$$13$$
}
function $goog$dom$getOwnerDocument$$($node$$18$$) {
  return 9 == $node$$18$$.nodeType ? $node$$18$$ : $node$$18$$.ownerDocument || $node$$18$$.document
}
function $goog$dom$setTextContent$$($element$$23$$, $text$$7$$) {
  if("textContent" in $element$$23$$) {
    $element$$23$$.textContent = $text$$7$$
  }else {
    if($element$$23$$.firstChild && 3 == $element$$23$$.firstChild.nodeType) {
      for(;$element$$23$$.lastChild != $element$$23$$.firstChild;) {
        $element$$23$$.removeChild($element$$23$$.lastChild)
      }
      $element$$23$$.firstChild.data = $text$$7$$
    }else {
      $goog$dom$removeChildren$$($element$$23$$), $element$$23$$.appendChild($goog$dom$getOwnerDocument$$($element$$23$$).createTextNode(String($text$$7$$)))
    }
  }
}
var $goog$dom$TAGS_TO_IGNORE_$$ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, $goog$dom$PREDEFINED_TAG_VALUES_$$ = {IMG:" ", BR:"\n"};
function $goog$dom$isFocusableTabIndex$$($element$$25_index$$55$$) {
  var $attrNode$$ = $element$$25_index$$55$$.getAttributeNode("tabindex");
  return $attrNode$$ && $attrNode$$.specified ? ($element$$25_index$$55$$ = $element$$25_index$$55$$.tabIndex, $goog$isNumber$$($element$$25_index$$55$$) && 0 <= $element$$25_index$$55$$ && 32768 > $element$$25_index$$55$$) : $JSCompiler_alias_FALSE$$
}
function $goog$dom$getTextContent$$($node$$19_textContent$$) {
  if($goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ && "innerText" in $node$$19_textContent$$) {
    $node$$19_textContent$$ = $node$$19_textContent$$.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var $buf$$ = [];
    $goog$dom$getTextContent_$$($node$$19_textContent$$, $buf$$, $JSCompiler_alias_TRUE$$);
    $node$$19_textContent$$ = $buf$$.join("")
  }
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  $node$$19_textContent$$ = $node$$19_textContent$$.replace(/\u200B/g, "");
  $goog$dom$BrowserFeature$CAN_USE_INNER_TEXT$$ || ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/ +/g, " "));
  " " != $node$$19_textContent$$ && ($node$$19_textContent$$ = $node$$19_textContent$$.replace(/^\s*/, ""));
  return $node$$19_textContent$$
}
function $goog$dom$getRawTextContent$$($node$$20$$) {
  var $buf$$1$$ = [];
  $goog$dom$getTextContent_$$($node$$20$$, $buf$$1$$, $JSCompiler_alias_FALSE$$);
  return $buf$$1$$.join("")
}
function $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$) {
  if(!($child$$7_node$$21$$.nodeName in $goog$dom$TAGS_TO_IGNORE_$$)) {
    if(3 == $child$$7_node$$21$$.nodeType) {
      $normalizeWhitespace$$ ? $buf$$2$$.push(String($child$$7_node$$21$$.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : $buf$$2$$.push($child$$7_node$$21$$.nodeValue)
    }else {
      if($child$$7_node$$21$$.nodeName in $goog$dom$PREDEFINED_TAG_VALUES_$$) {
        $buf$$2$$.push($goog$dom$PREDEFINED_TAG_VALUES_$$[$child$$7_node$$21$$.nodeName])
      }else {
        for($child$$7_node$$21$$ = $child$$7_node$$21$$.firstChild;$child$$7_node$$21$$;) {
          $goog$dom$getTextContent_$$($child$$7_node$$21$$, $buf$$2$$, $normalizeWhitespace$$), $child$$7_node$$21$$ = $child$$7_node$$21$$.nextSibling
        }
      }
    }
  }
}
function $goog$dom$isNodeList$$($val$$21$$) {
  if($val$$21$$ && "number" == typeof $val$$21$$.length) {
    if($goog$isObject$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item || "string" == typeof $val$$21$$.item
    }
    if($goog$isFunction$$($val$$21$$)) {
      return"function" == typeof $val$$21$$.item
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $goog$dom$getAncestorByTagNameAndClass$$($element$$27$$, $opt_tag$$2$$, $opt_class$$2$$) {
  if(!$opt_tag$$2$$ && !$opt_class$$2$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $tagName$$4$$ = $opt_tag$$2$$ ? $opt_tag$$2$$.toUpperCase() : $JSCompiler_alias_NULL$$;
  return $goog$dom$getAncestor$$($element$$27$$, function($node$$24$$) {
    return(!$tagName$$4$$ || $node$$24$$.nodeName == $tagName$$4$$) && (!$opt_class$$2$$ || $goog$array$contains$$($goog$dom$classes$get$$($node$$24$$), $opt_class$$2$$))
  })
}
function $goog$dom$getAncestor$$($element$$29$$, $matcher$$) {
  for(var $steps$$ = 0;$element$$29$$;) {
    if($matcher$$($element$$29$$)) {
      return $element$$29$$
    }
    $element$$29$$ = $element$$29$$.parentNode;
    $steps$$++
  }
  return $JSCompiler_alias_NULL$$
}
function $goog$dom$DomHelper$$($opt_document$$) {
  this.$document_$ = $opt_document$$ || $goog$global$$.document || document
}
$JSCompiler_prototypeAlias$$ = $goog$dom$DomHelper$$.prototype;
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $goog$dom$getDomHelper$$;
$JSCompiler_prototypeAlias$$.$getElement$ = function $$JSCompiler_prototypeAlias$$$$getElement$$($element$$30$$) {
  return $goog$isString$$($element$$30$$) ? this.$document_$.getElementById($element$$30$$) : $element$$30$$
};
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$14$$, $opt_el$$6$$) {
  var $opt_el$$inline_109$$ = $opt_el$$6$$ || this.$document_$, $parent$$inline_110$$ = $opt_el$$inline_109$$ || document, $retVal$$inline_111$$ = $JSCompiler_alias_NULL$$;
  return($retVal$$inline_111$$ = $parent$$inline_110$$.querySelectorAll && $parent$$inline_110$$.querySelector ? $parent$$inline_110$$.querySelector("." + $className$$14$$) : $goog$dom$getElementsByClass$$($className$$14$$, $opt_el$$inline_109$$)[0]) || $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($tagName$$5$$, $opt_attributes$$1$$, $var_args$$70$$) {
  return $goog$dom$createDom_$$(this.$document_$, arguments)
};
$JSCompiler_prototypeAlias$$.createElement = function $$JSCompiler_prototypeAlias$$$createElement$($name$$64$$) {
  return this.$document_$.createElement($name$$64$$)
};
$JSCompiler_prototypeAlias$$.createTextNode = function $$JSCompiler_prototypeAlias$$$createTextNode$($content$$5$$) {
  return this.$document_$.createTextNode(String($content$$5$$))
};
$JSCompiler_prototypeAlias$$.appendChild = $goog$dom$appendChild$$;
function $JSCompiler_StaticMethods_insertSiblingBefore$$($newNode$$1$$, $refNode$$8$$) {
  $refNode$$8$$.parentNode && $refNode$$8$$.parentNode.insertBefore($newNode$$1$$, $refNode$$8$$)
}
$JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$($element$$21$$) {
  return $goog$dom$BrowserFeature$CAN_USE_CHILDREN_ATTRIBUTE$$ && $element$$21$$.children != $JSCompiler_alias_VOID$$ ? $element$$21$$.children : $goog$array$filter$$($element$$21$$.childNodes, function($node$$8$$) {
    return 1 == $node$$8$$.nodeType
  })
};
$JSCompiler_prototypeAlias$$.$getFirstElementChild$ = $goog$dom$getFirstElementChild$$;
$JSCompiler_prototypeAlias$$.contains = $goog$dom$contains$$;
// Input 15
function $goog$soy$renderAsElement$$($template$$3$$, $opt_templateData$$2$$) {
  var $wrapper$$ = $goog$dom$getDomHelper$$().createElement("DIV"), $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$;
  $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$ = $template$$3$$($opt_templateData$$2$$ || $goog$soy$defaultTemplateData_$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$);
  $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$ = $goog$isObject$$($JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$) ? "zSoyz" : String($JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$);
  $wrapper$$.innerHTML = $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$;
  return 1 == $wrapper$$.childNodes.length && ($JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$ = $wrapper$$.firstChild, 1 == $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$.nodeType) ? $JSCompiler_inline_result$$12_firstChild_templateResult$$inline_113$$ : $wrapper$$
}
var $goog$soy$defaultTemplateData_$$ = {};
// Input 16
// Input 17
// Input 18
// Input 19
function $goog$style$setStyle_$$($element$$33$$, $value$$67$$, $prefixedStyle$$inline_118_style$$1$$) {
  var $camelStyle$$inline_117_propertyName$$8$$;
  a: {
    if($camelStyle$$inline_117_propertyName$$8$$ = $goog$string$toCamelCase$$($prefixedStyle$$inline_118_style$$1$$), $element$$33$$.style[$camelStyle$$inline_117_propertyName$$8$$] === $JSCompiler_alias_VOID$$ && ($prefixedStyle$$inline_118_style$$1$$ = ($goog$userAgent$WEBKIT$$ ? "Webkit" : $goog$userAgent$GECKO$$ ? "Moz" : $goog$userAgent$IE$$ ? "ms" : $goog$userAgent$OPERA$$ ? "O" : $JSCompiler_alias_NULL$$) + $goog$string$toTitleCase$$($prefixedStyle$$inline_118_style$$1$$), $element$$33$$.style[$prefixedStyle$$inline_118_style$$1$$] !== 
    $JSCompiler_alias_VOID$$)) {
      $camelStyle$$inline_117_propertyName$$8$$ = $prefixedStyle$$inline_118_style$$1$$;
      break a
    }
  }
  $camelStyle$$inline_117_propertyName$$8$$ && ($element$$33$$.style[$camelStyle$$inline_117_propertyName$$8$$] = $value$$67$$)
}
function $goog$style$getStyle_$$($element$$39$$) {
  var $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$;
  a: {
    $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ = $goog$dom$getOwnerDocument$$($element$$39$$);
    if($JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$.defaultView && $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$.defaultView.getComputedStyle && ($JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ = $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$.defaultView.getComputedStyle($element$$39$$, $JSCompiler_alias_NULL$$))) {
      $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ = $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$.direction || $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$.getPropertyValue("direction") || "";
      break a
    }
    $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ = ""
  }
  $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ || ($JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$ = ($element$$39$$.currentStyle ? $element$$39$$.currentStyle.direction : $JSCompiler_alias_NULL$$) || $element$$39$$.style && $element$$39$$.style.direction);
  return $JSCompiler_inline_result$$768_JSCompiler_temp$$769_doc$$inline_774_styles$$inline_775$$
}
function $goog$style$getPixelStyleValue_$$($value$$68$$) {
  "number" == typeof $value$$68$$ && ($value$$68$$ = Math.round($value$$68$$) + "px");
  return $value$$68$$
}
function $goog$style$showElement$$($el$$18$$, $display$$) {
  $el$$18$$.style.display = $display$$ ? "" : "none"
}
var $goog$style$unselectableStyle_$$ = $goog$userAgent$GECKO$$ ? "MozUserSelect" : $goog$userAgent$WEBKIT$$ ? "WebkitUserSelect" : $JSCompiler_alias_NULL$$;
// Input 20
// Input 21
// Input 22
function $goog$Disposable$$() {
  0 != $goog$Disposable$MonitoringMode$OFF$$ && (this.$creationStack$ = Error().stack, $goog$Disposable$instances_$$[$goog$getUid$$(this)] = this)
}
var $goog$Disposable$MonitoringMode$OFF$$ = 0, $goog$Disposable$instances_$$ = {};
$goog$Disposable$$.prototype.$disposed_$ = $JSCompiler_alias_FALSE$$;
$goog$Disposable$$.prototype.$dispose$ = function $$goog$Disposable$$$$$dispose$$() {
  if(!this.$disposed_$ && (this.$disposed_$ = $JSCompiler_alias_TRUE$$, this.$disposeInternal$(), 0 != $goog$Disposable$MonitoringMode$OFF$$)) {
    var $uid$$ = $goog$getUid$$(this);
    delete $goog$Disposable$instances_$$[$uid$$]
  }
};
$goog$Disposable$$.prototype.$disposeInternal$ = function $$goog$Disposable$$$$$disposeInternal$$() {
  if(this.$onDisposeCallbacks_$) {
    for(;this.$onDisposeCallbacks_$.length;) {
      this.$onDisposeCallbacks_$.shift()()
    }
  }
};
// Input 23
function $goog$events$Event$$($type$$57$$, $opt_target$$1$$) {
  this.type = $type$$57$$;
  this.currentTarget = this.target = $opt_target$$1$$
}
$JSCompiler_prototypeAlias$$ = $goog$events$Event$$.prototype;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$dispose$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$propagationStopped_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.defaultPrevented = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$returnValue_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  this.$propagationStopped_$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  this.defaultPrevented = $JSCompiler_alias_TRUE$$;
  this.$returnValue_$ = $JSCompiler_alias_FALSE$$
};
// Input 24
var $goog$events$ListenableKey$counter_$$ = 0;
// Input 25
function $goog$events$Listener$$() {
}
$JSCompiler_prototypeAlias$$ = $goog$events$Listener$$.prototype;
$JSCompiler_prototypeAlias$$.key = 0;
$JSCompiler_prototypeAlias$$.$removed$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$callOnce$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($listener$$32$$, $proxy$$, $src$$5$$, $type$$58$$, $capture$$, $opt_handler$$) {
  $goog$isFunction$$($listener$$32$$) ? this.$isFunctionListener_$ = $JSCompiler_alias_TRUE$$ : $listener$$32$$ && $listener$$32$$.handleEvent && $goog$isFunction$$($listener$$32$$.handleEvent) ? this.$isFunctionListener_$ = $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  this.$listener$ = $listener$$32$$;
  this.proxy = $proxy$$;
  this.src = $src$$5$$;
  this.type = $type$$58$$;
  this.capture = !!$capture$$;
  this.$handler$ = $opt_handler$$;
  this.$callOnce$ = $JSCompiler_alias_FALSE$$;
  this.key = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($eventObject$$) {
  return this.$isFunctionListener_$ ? this.$listener$.call(this.$handler$ || this.src, $eventObject$$) : this.$listener$.handleEvent.call(this.$listener$, $eventObject$$)
};
// Input 26
var $goog$events$BrowserFeature$HAS_W3C_BUTTON$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ = !$goog$userAgent$IE$$ || $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$ = $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("9");
!$goog$userAgent$WEBKIT$$ || $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && $goog$userAgent$isVersion$$("1.9b") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("8") || $goog$userAgent$OPERA$$ && $goog$userAgent$isVersion$$("9.5") || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("528");
$goog$userAgent$GECKO$$ && !$goog$userAgent$isVersion$$("8") || $goog$userAgent$IE$$ && $goog$userAgent$isVersion$$("9");
// Input 27
// Input 28
// Input 29
// Input 30
function $goog$reflect$sinkValue$$($x$$62$$) {
  $goog$reflect$sinkValue$$[" "]($x$$62$$);
  return $x$$62$$
}
$goog$reflect$sinkValue$$[" "] = $goog$nullFunction$$;
// Input 31
function $goog$events$BrowserEvent$$($opt_e$$, $opt_currentTarget$$) {
  $opt_e$$ && this.init($opt_e$$, $opt_currentTarget$$)
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IEButtonMap$$ = [1, 4, 2];
$JSCompiler_prototypeAlias$$ = $goog$events$BrowserEvent$$.prototype;
$JSCompiler_prototypeAlias$$.target = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.relatedTarget = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.offsetX = 0;
$JSCompiler_prototypeAlias$$.offsetY = 0;
$JSCompiler_prototypeAlias$$.clientX = 0;
$JSCompiler_prototypeAlias$$.clientY = 0;
$JSCompiler_prototypeAlias$$.screenX = 0;
$JSCompiler_prototypeAlias$$.screenY = 0;
$JSCompiler_prototypeAlias$$.button = 0;
$JSCompiler_prototypeAlias$$.keyCode = 0;
$JSCompiler_prototypeAlias$$.charCode = 0;
$JSCompiler_prototypeAlias$$.ctrlKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.altKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.shiftKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.metaKey = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$platformModifierKey$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$event_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.init = function $$JSCompiler_prototypeAlias$$$init$($e$$17$$, $opt_currentTarget$$1$$) {
  var $type$$60$$ = this.type = $e$$17$$.type;
  $goog$events$Event$$.call(this, $type$$60$$);
  this.target = $e$$17$$.target || $e$$17$$.srcElement;
  this.currentTarget = $opt_currentTarget$$1$$;
  var $relatedTarget$$ = $e$$17$$.relatedTarget;
  if($relatedTarget$$) {
    if($goog$userAgent$GECKO$$) {
      var $JSCompiler_inline_result$$24$$;
      a: {
        try {
          $goog$reflect$sinkValue$$($relatedTarget$$.nodeName);
          $JSCompiler_inline_result$$24$$ = $JSCompiler_alias_TRUE$$;
          break a
        }catch($e$$inline_122$$) {
        }
        $JSCompiler_inline_result$$24$$ = $JSCompiler_alias_FALSE$$
      }
      $JSCompiler_inline_result$$24$$ || ($relatedTarget$$ = $JSCompiler_alias_NULL$$)
    }
  }else {
    "mouseover" == $type$$60$$ ? $relatedTarget$$ = $e$$17$$.fromElement : "mouseout" == $type$$60$$ && ($relatedTarget$$ = $e$$17$$.toElement)
  }
  this.relatedTarget = $relatedTarget$$;
  this.offsetX = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetX : $e$$17$$.layerX;
  this.offsetY = $goog$userAgent$WEBKIT$$ || $e$$17$$.offsetY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.offsetY : $e$$17$$.layerY;
  this.clientX = $e$$17$$.clientX !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientX : $e$$17$$.pageX;
  this.clientY = $e$$17$$.clientY !== $JSCompiler_alias_VOID$$ ? $e$$17$$.clientY : $e$$17$$.pageY;
  this.screenX = $e$$17$$.screenX || 0;
  this.screenY = $e$$17$$.screenY || 0;
  this.button = $e$$17$$.button;
  this.keyCode = $e$$17$$.keyCode || 0;
  this.charCode = $e$$17$$.charCode || ("keypress" == $type$$60$$ ? $e$$17$$.keyCode : 0);
  this.ctrlKey = $e$$17$$.ctrlKey;
  this.altKey = $e$$17$$.altKey;
  this.shiftKey = $e$$17$$.shiftKey;
  this.metaKey = $e$$17$$.metaKey;
  this.$platformModifierKey$ = $goog$userAgent$MAC$$ ? $e$$17$$.metaKey : $e$$17$$.ctrlKey;
  this.state = $e$$17$$.state;
  this.$event_$ = $e$$17$$;
  $e$$17$$.defaultPrevented && this.preventDefault();
  delete this.$propagationStopped_$
};
function $JSCompiler_StaticMethods_isButton$$($JSCompiler_StaticMethods_isButton$self$$) {
  return $goog$events$BrowserFeature$HAS_W3C_BUTTON$$ ? 0 == $JSCompiler_StaticMethods_isButton$self$$.$event_$.button : "click" == $JSCompiler_StaticMethods_isButton$self$$.type ? $JSCompiler_alias_TRUE$$ : !!($JSCompiler_StaticMethods_isButton$self$$.$event_$.button & $goog$events$BrowserEvent$IEButtonMap$$[0])
}
$JSCompiler_prototypeAlias$$.stopPropagation = function $$JSCompiler_prototypeAlias$$$stopPropagation$() {
  $goog$events$BrowserEvent$$.$superClass_$.stopPropagation.call(this);
  this.$event_$.stopPropagation ? this.$event_$.stopPropagation() : this.$event_$.cancelBubble = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.preventDefault = function $$JSCompiler_prototypeAlias$$$preventDefault$() {
  $goog$events$BrowserEvent$$.$superClass_$.preventDefault.call(this);
  var $be$$ = this.$event_$;
  if($be$$.preventDefault) {
    $be$$.preventDefault()
  }else {
    if($be$$.returnValue = $JSCompiler_alias_FALSE$$, $goog$events$BrowserFeature$SET_KEY_CODE_TO_PREVENT_DEFAULT$$) {
      try {
        if($be$$.ctrlKey || 112 <= $be$$.keyCode && 123 >= $be$$.keyCode) {
          $be$$.keyCode = -1
        }
      }catch($ex$$1$$) {
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = $JSCompiler_emptyFn$$();
// Input 32
var $goog$events$listeners_$$ = {}, $goog$events$listenerTree_$$ = {}, $goog$events$sources_$$ = {}, $goog$events$onStringMap_$$ = {};
function $goog$events$listen$$($listenableKey_src$$8$$, $key$$47_type$$61$$, $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$) {
  if($goog$isArray$$($key$$47_type$$61$$)) {
    for(var $i$$62$$ = 0;$i$$62$$ < $key$$47_type$$61$$.length;$i$$62$$++) {
      $goog$events$listen$$($listenableKey_src$$8$$, $key$$47_type$$61$$[$i$$62$$], $listener$$35$$, $opt_capt$$2$$, $opt_handler$$1$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey_src$$8$$ = $goog$events$listen_$$($listenableKey_src$$8$$, $key$$47_type$$61$$, $listener$$35$$, $JSCompiler_alias_FALSE$$, $opt_capt$$2$$, $opt_handler$$1$$);
  $key$$47_type$$61$$ = $listenableKey_src$$8$$.key;
  $goog$events$listeners_$$[$key$$47_type$$61$$] = $listenableKey_src$$8$$;
  return $key$$47_type$$61$$
}
function $goog$events$listen_$$($src$$9$$, $type$$62$$, $listener$$36$$, $callOnce$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$) {
  $type$$62$$ || $JSCompiler_alias_THROW$$(Error("Invalid event type"));
  $capture$$1_opt_capt$$3$$ = !!$capture$$1_opt_capt$$3$$;
  var $listenerObj_map$$ = $goog$events$listenerTree_$$;
  $type$$62$$ in $listenerObj_map$$ || ($listenerObj_map$$[$type$$62$$] = {$count_$:0, $remaining_$:0});
  $listenerObj_map$$ = $listenerObj_map$$[$type$$62$$];
  $capture$$1_opt_capt$$3$$ in $listenerObj_map$$ || ($listenerObj_map$$[$capture$$1_opt_capt$$3$$] = {$count_$:0, $remaining_$:0}, $listenerObj_map$$.$count_$++);
  var $listenerObj_map$$ = $listenerObj_map$$[$capture$$1_opt_capt$$3$$], $srcUid$$ = $goog$getUid$$($src$$9$$), $listenerArray$$;
  $listenerObj_map$$.$remaining_$++;
  if($listenerObj_map$$[$srcUid$$]) {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$];
    for(var $i$$63_proxy$$1$$ = 0;$i$$63_proxy$$1$$ < $listenerArray$$.length;$i$$63_proxy$$1$$++) {
      if($listenerObj_map$$ = $listenerArray$$[$i$$63_proxy$$1$$], $listenerObj_map$$.$listener$ == $listener$$36$$ && $listenerObj_map$$.$handler$ == $opt_handler$$2$$) {
        if($listenerObj_map$$.$removed$) {
          break
        }
        $callOnce$$ || ($listenerArray$$[$i$$63_proxy$$1$$].$callOnce$ = $JSCompiler_alias_FALSE$$);
        return $listenerArray$$[$i$$63_proxy$$1$$]
      }
    }
  }else {
    $listenerArray$$ = $listenerObj_map$$[$srcUid$$] = [], $listenerObj_map$$.$count_$++
  }
  $i$$63_proxy$$1$$ = $goog$events$getProxy$$();
  $listenerObj_map$$ = new $goog$events$Listener$$;
  $listenerObj_map$$.init($listener$$36$$, $i$$63_proxy$$1$$, $src$$9$$, $type$$62$$, $capture$$1_opt_capt$$3$$, $opt_handler$$2$$);
  $listenerObj_map$$.$callOnce$ = $callOnce$$;
  $i$$63_proxy$$1$$.src = $src$$9$$;
  $i$$63_proxy$$1$$.$listener$ = $listenerObj_map$$;
  $listenerArray$$.push($listenerObj_map$$);
  $goog$events$sources_$$[$srcUid$$] || ($goog$events$sources_$$[$srcUid$$] = []);
  $goog$events$sources_$$[$srcUid$$].push($listenerObj_map$$);
  $src$$9$$.addEventListener ? ($src$$9$$ == $goog$global$$ || !$src$$9$$.$customEvent_$) && $src$$9$$.addEventListener($type$$62$$, $i$$63_proxy$$1$$, $capture$$1_opt_capt$$3$$) : $src$$9$$.attachEvent($type$$62$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$62$$] : $goog$events$onStringMap_$$[$type$$62$$] = "on" + $type$$62$$, $i$$63_proxy$$1$$);
  return $listenerObj_map$$
}
function $goog$events$getProxy$$() {
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$, $f$$26$$ = $goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$ ? function($eventObject$$1$$) {
    return $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$1$$)
  } : function($eventObject$$2_v$$) {
    $eventObject$$2_v$$ = $proxyCallbackFunction$$.call($f$$26$$.src, $f$$26$$.$listener$, $eventObject$$2_v$$);
    if(!$eventObject$$2_v$$) {
      return $eventObject$$2_v$$
    }
  };
  return $f$$26$$
}
function $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$, $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$) {
  if($goog$isArray$$($key$$48_type$$63$$)) {
    for(var $i$$64$$ = 0;$i$$64$$ < $key$$48_type$$63$$.length;$i$$64$$++) {
      $goog$events$listenOnce$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$[$i$$64$$], $listener$$37$$, $opt_capt$$4$$, $opt_handler$$3$$)
    }
    return $JSCompiler_alias_NULL$$
  }
  $listenableKey$$1_src$$10$$ = $goog$events$listen_$$($listenableKey$$1_src$$10$$, $key$$48_type$$63$$, $listener$$37$$, $JSCompiler_alias_TRUE$$, $opt_capt$$4$$, $opt_handler$$3$$);
  $key$$48_type$$63$$ = $listenableKey$$1_src$$10$$.key;
  $goog$events$listeners_$$[$key$$48_type$$63$$] = $listenableKey$$1_src$$10$$;
  return $key$$48_type$$63$$
}
function $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$, $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$) {
  if($goog$isArray$$($type$$64$$)) {
    for(var $i$$65$$ = 0;$i$$65$$ < $type$$64$$.length;$i$$65$$++) {
      $goog$events$unlisten$$($listenerArray$$1_src$$12$$, $type$$64$$[$i$$65$$], $listener$$39$$, $capture$$2_opt_capt$$6$$, $opt_handler$$5$$)
    }
  }else {
    if($capture$$2_opt_capt$$6$$ = !!$capture$$2_opt_capt$$6$$, $listenerArray$$1_src$$12$$ = $goog$events$getListeners_$$($listenerArray$$1_src$$12$$, $type$$64$$, $capture$$2_opt_capt$$6$$)) {
      for($i$$65$$ = 0;$i$$65$$ < $listenerArray$$1_src$$12$$.length;$i$$65$$++) {
        if($listenerArray$$1_src$$12$$[$i$$65$$].$listener$ == $listener$$39$$ && $listenerArray$$1_src$$12$$[$i$$65$$].capture == $capture$$2_opt_capt$$6$$ && $listenerArray$$1_src$$12$$[$i$$65$$].$handler$ == $opt_handler$$5$$) {
          $goog$events$unlistenByKey$$($listenerArray$$1_src$$12$$[$i$$65$$].key);
          break
        }
      }
    }
  }
}
function $goog$events$unlistenByKey$$($key$$49$$) {
  var $listener$$40_listenerArray$$2$$ = $goog$events$listeners_$$[$key$$49$$];
  if(!$listener$$40_listenerArray$$2$$ || $listener$$40_listenerArray$$2$$.$removed$) {
    return $JSCompiler_alias_FALSE$$
  }
  var $src$$13_srcUid$$1$$ = $listener$$40_listenerArray$$2$$.src, $type$$65$$ = $listener$$40_listenerArray$$2$$.type, $proxy$$2_sourcesArray$$ = $listener$$40_listenerArray$$2$$.proxy, $capture$$3$$ = $listener$$40_listenerArray$$2$$.capture;
  $src$$13_srcUid$$1$$.removeEventListener ? ($src$$13_srcUid$$1$$ == $goog$global$$ || !$src$$13_srcUid$$1$$.$customEvent_$) && $src$$13_srcUid$$1$$.removeEventListener($type$$65$$, $proxy$$2_sourcesArray$$, $capture$$3$$) : $src$$13_srcUid$$1$$.detachEvent && $src$$13_srcUid$$1$$.detachEvent($type$$65$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$$65$$] : $goog$events$onStringMap_$$[$type$$65$$] = "on" + $type$$65$$, $proxy$$2_sourcesArray$$);
  $src$$13_srcUid$$1$$ = $goog$getUid$$($src$$13_srcUid$$1$$);
  $goog$events$sources_$$[$src$$13_srcUid$$1$$] && ($proxy$$2_sourcesArray$$ = $goog$events$sources_$$[$src$$13_srcUid$$1$$], $goog$array$remove$$($proxy$$2_sourcesArray$$, $listener$$40_listenerArray$$2$$), 0 == $proxy$$2_sourcesArray$$.length && delete $goog$events$sources_$$[$src$$13_srcUid$$1$$]);
  $listener$$40_listenerArray$$2$$.$removed$ = $JSCompiler_alias_TRUE$$;
  if($listener$$40_listenerArray$$2$$ = $goog$events$listenerTree_$$[$type$$65$$][$capture$$3$$][$src$$13_srcUid$$1$$]) {
    $listener$$40_listenerArray$$2$$.$needsCleanup_$ = $JSCompiler_alias_TRUE$$, $goog$events$cleanUp_$$($type$$65$$, $capture$$3$$, $src$$13_srcUid$$1$$, $listener$$40_listenerArray$$2$$)
  }
  delete $goog$events$listeners_$$[$key$$49$$];
  return $JSCompiler_alias_TRUE$$
}
function $goog$events$cleanUp_$$($type$$66$$, $capture$$4$$, $srcUid$$2$$, $listenerArray$$3$$) {
  if(!$listenerArray$$3$$.$locked_$ && $listenerArray$$3$$.$needsCleanup_$) {
    for(var $oldIndex$$ = 0, $newIndex$$ = 0;$oldIndex$$ < $listenerArray$$3$$.length;$oldIndex$$++) {
      $listenerArray$$3$$[$oldIndex$$].$removed$ ? $listenerArray$$3$$[$oldIndex$$].proxy.src = $JSCompiler_alias_NULL$$ : ($oldIndex$$ != $newIndex$$ && ($listenerArray$$3$$[$newIndex$$] = $listenerArray$$3$$[$oldIndex$$]), $newIndex$$++)
    }
    $listenerArray$$3$$.length = $newIndex$$;
    $listenerArray$$3$$.$needsCleanup_$ = $JSCompiler_alias_FALSE$$;
    0 == $newIndex$$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$][$srcUid$$2$$], $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$--, 0 == $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$].$count_$ && (delete $goog$events$listenerTree_$$[$type$$66$$][$capture$$4$$], $goog$events$listenerTree_$$[$type$$66$$].$count_$--), 0 == $goog$events$listenerTree_$$[$type$$66$$].$count_$ && delete $goog$events$listenerTree_$$[$type$$66$$])
  }
}
function $goog$events$removeAll$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$) {
  var $count$$9$$ = 0;
  if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ != $JSCompiler_alias_NULL$$) {
    if($opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$getUid$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$), $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$]) {
      $opt_obj$$27_sourcesArray$$1_srcUid$$3$$ = $goog$events$sources_$$[$opt_obj$$27_sourcesArray$$1_srcUid$$3$$];
      for(var $i$$66$$ = $opt_obj$$27_sourcesArray$$1_srcUid$$3$$.length - 1;0 <= $i$$66$$;$i$$66$$--) {
        $goog$events$unlistenByKey$$($opt_obj$$27_sourcesArray$$1_srcUid$$3$$[$i$$66$$].key), $count$$9$$++
      }
    }
  }else {
    $goog$object$forEach$$($goog$events$listeners_$$, function($listener$$43$$, $key$$50$$) {
      $goog$events$unlistenByKey$$($key$$50$$);
      $count$$9$$++
    })
  }
}
function $goog$events$getListeners_$$($obj$$86_objUid$$, $type$$68$$, $capture$$6$$) {
  var $map$$1$$ = $goog$events$listenerTree_$$;
  return $type$$68$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$type$$68$$], $capture$$6$$ in $map$$1$$ && ($map$$1$$ = $map$$1$$[$capture$$6$$], $obj$$86_objUid$$ = $goog$getUid$$($obj$$86_objUid$$), $map$$1$$[$obj$$86_objUid$$])) ? $map$$1$$[$obj$$86_objUid$$] : $JSCompiler_alias_NULL$$
}
function $goog$events$fireListeners_$$($map$$4$$, $obj$$89_objUid$$2$$, $type$$72$$, $capture$$9$$, $eventObject$$4$$) {
  var $retval$$ = 1;
  $obj$$89_objUid$$2$$ = $goog$getUid$$($obj$$89_objUid$$2$$);
  if($map$$4$$[$obj$$89_objUid$$2$$]) {
    var $remaining$$ = --$map$$4$$.$remaining_$, $listenerArray$$5$$ = $map$$4$$[$obj$$89_objUid$$2$$];
    $listenerArray$$5$$.$locked_$ ? $listenerArray$$5$$.$locked_$++ : $listenerArray$$5$$.$locked_$ = 1;
    try {
      for(var $length$$16$$ = $listenerArray$$5$$.length, $i$$68$$ = 0;$i$$68$$ < $length$$16$$;$i$$68$$++) {
        var $listener$$46$$ = $listenerArray$$5$$[$i$$68$$];
        $listener$$46$$ && !$listener$$46$$.$removed$ && ($retval$$ &= $goog$events$fireListener$$($listener$$46$$, $eventObject$$4$$) !== $JSCompiler_alias_FALSE$$)
      }
    }finally {
      $map$$4$$.$remaining_$ = Math.max($remaining$$, $map$$4$$.$remaining_$), $listenerArray$$5$$.$locked_$--, $goog$events$cleanUp_$$($type$$72$$, $capture$$9$$, $obj$$89_objUid$$2$$, $listenerArray$$5$$)
    }
  }
  return Boolean($retval$$)
}
function $goog$events$fireListener$$($listener$$47$$, $eventObject$$5$$) {
  $listener$$47$$.$callOnce$ && $goog$events$unlistenByKey$$($listener$$47$$.key);
  return $listener$$47$$.handleEvent($eventObject$$5$$)
}
function $goog$events$dispatchEvent$$($src$$16$$, $e$$19$$) {
  var $hasCapture$$1_type$$73$$ = $e$$19$$.type || $e$$19$$, $current$$1_map$$5$$ = $goog$events$listenerTree_$$;
  if(!($hasCapture$$1_type$$73$$ in $current$$1_map$$5$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  if($goog$isString$$($e$$19$$)) {
    $e$$19$$ = new $goog$events$Event$$($e$$19$$, $src$$16$$)
  }else {
    if($e$$19$$ instanceof $goog$events$Event$$) {
      $e$$19$$.target = $e$$19$$.target || $src$$16$$
    }else {
      var $oldEvent_rv$$11$$ = $e$$19$$;
      $e$$19$$ = new $goog$events$Event$$($hasCapture$$1_type$$73$$, $src$$16$$);
      $goog$object$extend$$($e$$19$$, $oldEvent_rv$$11$$)
    }
  }
  var $oldEvent_rv$$11$$ = 1, $ancestors$$1$$, $current$$1_map$$5$$ = $current$$1_map$$5$$[$hasCapture$$1_type$$73$$], $hasCapture$$1_type$$73$$ = $JSCompiler_alias_TRUE$$ in $current$$1_map$$5$$, $parent$$18_targetsMap$$;
  if($hasCapture$$1_type$$73$$) {
    $ancestors$$1$$ = [];
    for($parent$$18_targetsMap$$ = $src$$16$$;$parent$$18_targetsMap$$;$parent$$18_targetsMap$$ = $parent$$18_targetsMap$$.$parentEventTarget_$) {
      $ancestors$$1$$.push($parent$$18_targetsMap$$)
    }
    $parent$$18_targetsMap$$ = $current$$1_map$$5$$[$JSCompiler_alias_TRUE$$];
    $parent$$18_targetsMap$$.$remaining_$ = $parent$$18_targetsMap$$.$count_$;
    for(var $i$$69$$ = $ancestors$$1$$.length - 1;!$e$$19$$.$propagationStopped_$ && 0 <= $i$$69$$ && $parent$$18_targetsMap$$.$remaining_$;$i$$69$$--) {
      $e$$19$$.currentTarget = $ancestors$$1$$[$i$$69$$], $oldEvent_rv$$11$$ &= $goog$events$fireListeners_$$($parent$$18_targetsMap$$, $ancestors$$1$$[$i$$69$$], $e$$19$$.type, $JSCompiler_alias_TRUE$$, $e$$19$$) && $e$$19$$.$returnValue_$ != $JSCompiler_alias_FALSE$$
    }
  }
  if($JSCompiler_alias_FALSE$$ in $current$$1_map$$5$$) {
    if($parent$$18_targetsMap$$ = $current$$1_map$$5$$[$JSCompiler_alias_FALSE$$], $parent$$18_targetsMap$$.$remaining_$ = $parent$$18_targetsMap$$.$count_$, $hasCapture$$1_type$$73$$) {
      for($i$$69$$ = 0;!$e$$19$$.$propagationStopped_$ && $i$$69$$ < $ancestors$$1$$.length && $parent$$18_targetsMap$$.$remaining_$;$i$$69$$++) {
        $e$$19$$.currentTarget = $ancestors$$1$$[$i$$69$$], $oldEvent_rv$$11$$ &= $goog$events$fireListeners_$$($parent$$18_targetsMap$$, $ancestors$$1$$[$i$$69$$], $e$$19$$.type, $JSCompiler_alias_FALSE$$, $e$$19$$) && $e$$19$$.$returnValue_$ != $JSCompiler_alias_FALSE$$
      }
    }else {
      for($current$$1_map$$5$$ = $src$$16$$;!$e$$19$$.$propagationStopped_$ && $current$$1_map$$5$$ && $parent$$18_targetsMap$$.$remaining_$;$current$$1_map$$5$$ = $current$$1_map$$5$$.$parentEventTarget_$) {
        $e$$19$$.currentTarget = $current$$1_map$$5$$, $oldEvent_rv$$11$$ &= $goog$events$fireListeners_$$($parent$$18_targetsMap$$, $current$$1_map$$5$$, $e$$19$$.type, $JSCompiler_alias_FALSE$$, $e$$19$$) && $e$$19$$.$returnValue_$ != $JSCompiler_alias_FALSE$$
      }
    }
  }
  return Boolean($oldEvent_rv$$11$$)
}
function $goog$events$handleBrowserEvent_$$($listener$$48$$, $opt_evt$$) {
  if($listener$$48$$.$removed$) {
    return $JSCompiler_alias_TRUE$$
  }
  var $be$$1_type$$74$$ = $listener$$48$$.type, $map$$6$$ = $goog$events$listenerTree_$$;
  if(!($be$$1_type$$74$$ in $map$$6$$)) {
    return $JSCompiler_alias_TRUE$$
  }
  var $map$$6$$ = $map$$6$$[$be$$1_type$$74$$], $ieEvent_retval$$1$$, $targetsMap$$1$$;
  if(!$goog$events$BrowserFeature$HAS_W3C_EVENT_SUPPORT$$) {
    $ieEvent_retval$$1$$ = $opt_evt$$ || $goog$getObjectByName$$("window.event");
    var $hasCapture$$2$$ = $JSCompiler_alias_TRUE$$ in $map$$6$$, $hasBubble$$1$$ = $JSCompiler_alias_FALSE$$ in $map$$6$$;
    if($hasCapture$$2$$) {
      if(0 > $ieEvent_retval$$1$$.keyCode || $ieEvent_retval$$1$$.returnValue != $JSCompiler_alias_VOID$$) {
        return $JSCompiler_alias_TRUE$$
      }
      a: {
        var $evt$$16_useReturnValue$$inline_125$$ = $JSCompiler_alias_FALSE$$;
        if(0 == $ieEvent_retval$$1$$.keyCode) {
          try {
            $ieEvent_retval$$1$$.keyCode = -1;
            break a
          }catch($ex$$inline_126$$) {
            $evt$$16_useReturnValue$$inline_125$$ = $JSCompiler_alias_TRUE$$
          }
        }
        if($evt$$16_useReturnValue$$inline_125$$ || $ieEvent_retval$$1$$.returnValue == $JSCompiler_alias_VOID$$) {
          $ieEvent_retval$$1$$.returnValue = $JSCompiler_alias_TRUE$$
        }
      }
    }
    $evt$$16_useReturnValue$$inline_125$$ = new $goog$events$BrowserEvent$$;
    $evt$$16_useReturnValue$$inline_125$$.init($ieEvent_retval$$1$$, this);
    $ieEvent_retval$$1$$ = $JSCompiler_alias_TRUE$$;
    try {
      if($hasCapture$$2$$) {
        for(var $ancestors$$2$$ = [], $parent$$19$$ = $evt$$16_useReturnValue$$inline_125$$.currentTarget;$parent$$19$$;$parent$$19$$ = $parent$$19$$.parentNode) {
          $ancestors$$2$$.push($parent$$19$$)
        }
        $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_TRUE$$];
        $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
        for(var $i$$70$$ = $ancestors$$2$$.length - 1;!$evt$$16_useReturnValue$$inline_125$$.$propagationStopped_$ && 0 <= $i$$70$$ && $targetsMap$$1$$.$remaining_$;$i$$70$$--) {
          $evt$$16_useReturnValue$$inline_125$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_TRUE$$, $evt$$16_useReturnValue$$inline_125$$)
        }
        if($hasBubble$$1$$) {
          $targetsMap$$1$$ = $map$$6$$[$JSCompiler_alias_FALSE$$];
          $targetsMap$$1$$.$remaining_$ = $targetsMap$$1$$.$count_$;
          for($i$$70$$ = 0;!$evt$$16_useReturnValue$$inline_125$$.$propagationStopped_$ && $i$$70$$ < $ancestors$$2$$.length && $targetsMap$$1$$.$remaining_$;$i$$70$$++) {
            $evt$$16_useReturnValue$$inline_125$$.currentTarget = $ancestors$$2$$[$i$$70$$], $ieEvent_retval$$1$$ &= $goog$events$fireListeners_$$($targetsMap$$1$$, $ancestors$$2$$[$i$$70$$], $be$$1_type$$74$$, $JSCompiler_alias_FALSE$$, $evt$$16_useReturnValue$$inline_125$$)
          }
        }
      }else {
        $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $evt$$16_useReturnValue$$inline_125$$)
      }
    }finally {
      $ancestors$$2$$ && ($ancestors$$2$$.length = 0)
    }
    return $ieEvent_retval$$1$$
  }
  $be$$1_type$$74$$ = new $goog$events$BrowserEvent$$($opt_evt$$, this);
  return $ieEvent_retval$$1$$ = $goog$events$fireListener$$($listener$$48$$, $be$$1_type$$74$$)
}
var $goog$events$uniqueIdCounter_$$ = 0;
// Input 33
function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this)
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$events$EventTarget$$.prototype;
$JSCompiler_prototypeAlias$$.$customEvent_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$parentEventTarget_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = $JSCompiler_set$$("$parentEventTarget_$");
$JSCompiler_prototypeAlias$$.addEventListener = function $$JSCompiler_prototypeAlias$$$addEventListener$($type$$75$$, $handler$$40$$, $opt_capture$$1$$, $opt_handlerScope$$) {
  $goog$events$listen$$(this, $type$$75$$, $handler$$40$$, $opt_capture$$1$$, $opt_handlerScope$$)
};
$JSCompiler_prototypeAlias$$.removeEventListener = function $$JSCompiler_prototypeAlias$$$removeEventListener$($type$$76$$, $handler$$41$$, $opt_capture$$2$$, $opt_handlerScope$$1$$) {
  $goog$events$unlisten$$(this, $type$$76$$, $handler$$41$$, $opt_capture$$2$$, $opt_handlerScope$$1$$)
};
$JSCompiler_prototypeAlias$$.dispatchEvent = function $$JSCompiler_prototypeAlias$$$dispatchEvent$($e$$23$$) {
  return $goog$events$dispatchEvent$$(this, $e$$23$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  $goog$events$removeAll$$(this);
  this.$parentEventTarget_$ = $JSCompiler_alias_NULL$$
};
// Input 34
function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
  $goog$Disposable$$.call(this);
  this.$interval_$ = $opt_interval$$ || 1;
  this.$timerObject_$ = $opt_timerObject$$ || $goog$Timer$defaultTimerObject$$;
  this.$boundTick_$ = $goog$bind$$(this.$tick_$, this);
  this.$last_$ = $goog$now$$()
}
$goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
$goog$Timer$$.prototype.enabled = $JSCompiler_alias_FALSE$$;
var $goog$Timer$defaultTimerObject$$ = $goog$global$$;
$JSCompiler_prototypeAlias$$ = $goog$Timer$$.prototype;
$JSCompiler_prototypeAlias$$.$timer_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$tick_$ = function $$JSCompiler_prototypeAlias$$$$tick_$$() {
  if(this.enabled) {
    var $elapsed$$ = $goog$now$$() - this.$last_$;
    0 < $elapsed$$ && $elapsed$$ < 0.8 * this.$interval_$ ? this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$ - $elapsed$$) : (this.dispatchEvent($goog$Timer$TICK$$), this.enabled && (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$()))
  }
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$() {
  this.enabled = $JSCompiler_alias_TRUE$$;
  this.$timer_$ || (this.$timer_$ = this.$timerObject_$.setTimeout(this.$boundTick_$, this.$interval_$), this.$last_$ = $goog$now$$())
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.enabled = $JSCompiler_alias_FALSE$$;
  this.$timer_$ && (this.$timerObject_$.clearTimeout(this.$timer_$), this.$timer_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$timerObject_$
};
var $goog$Timer$TICK$$ = "tick";
function $goog$Timer$callOnce$$($listener$$57$$, $opt_delay$$, $opt_handler$$8$$) {
  $goog$isFunction$$($listener$$57$$) ? $opt_handler$$8$$ && ($listener$$57$$ = $goog$bind$$($listener$$57$$, $opt_handler$$8$$)) : $listener$$57$$ && "function" == typeof $listener$$57$$.handleEvent ? $listener$$57$$ = $goog$bind$$($listener$$57$$.handleEvent, $listener$$57$$) : $JSCompiler_alias_THROW$$(Error("Invalid listener argument"));
  return 2147483647 < $opt_delay$$ ? -1 : $goog$Timer$defaultTimerObject$$.setTimeout($listener$$57$$, $opt_delay$$ || 0)
}
;
// Input 35
function $goog$async$Delay$$($listener$$58$$, $opt_interval$$1$$, $opt_handler$$9$$) {
  $goog$Disposable$$.call(this);
  this.$listener_$ = $listener$$58$$;
  this.$interval_$ = $opt_interval$$1$$ || 0;
  this.$handler_$ = $opt_handler$$9$$;
  this.$callback_$ = $goog$bind$$(this.$doAction_$, this)
}
$goog$inherits$$($goog$async$Delay$$, $goog$Disposable$$);
$JSCompiler_prototypeAlias$$ = $goog$async$Delay$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = 0;
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$async$Delay$$.$superClass_$.$disposeInternal$.call(this);
  this.stop();
  delete this.$listener_$;
  delete this.$handler_$
};
$JSCompiler_prototypeAlias$$.start = function $$JSCompiler_prototypeAlias$$$start$($opt_interval$$2$$) {
  this.stop();
  this.$id_$ = $goog$Timer$callOnce$$(this.$callback_$, $opt_interval$$2$$ !== $JSCompiler_alias_VOID$$ ? $opt_interval$$2$$ : this.$interval_$)
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$() {
  this.$isActive$() && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$id_$);
  this.$id_$ = 0
};
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return 0 != this.$id_$
};
$JSCompiler_prototypeAlias$$.$doAction_$ = function $$JSCompiler_prototypeAlias$$$$doAction_$$() {
  this.$id_$ = 0;
  this.$listener_$ && this.$listener_$.call(this.$handler_$)
};
// Input 36
// Input 37
// Input 38
var $goog$fx$anim$activeAnimations_$$ = {}, $goog$fx$anim$animationDelay_$$ = $JSCompiler_alias_NULL$$;
function $goog$fx$anim$unregisterAnimation$$($animation$$1_uid$$2$$) {
  $animation$$1_uid$$2$$ = $goog$getUid$$($animation$$1_uid$$2$$);
  delete $goog$fx$anim$activeAnimations_$$[$animation$$1_uid$$2$$];
  $goog$object$isEmpty$$() && $goog$fx$anim$animationDelay_$$ && $goog$fx$anim$animationDelay_$$.stop()
}
function $goog$fx$anim$requestAnimationFrame_$$() {
  $goog$fx$anim$animationDelay_$$ || ($goog$fx$anim$animationDelay_$$ = new $goog$async$Delay$$(function() {
    $goog$fx$anim$cycleAnimations_$$()
  }, 20));
  var $delay$$3$$ = $goog$fx$anim$animationDelay_$$;
  $delay$$3$$.$isActive$() || $delay$$3$$.start()
}
function $goog$fx$anim$cycleAnimations_$$() {
  var $now$$1$$ = $goog$now$$();
  $goog$object$forEach$$($goog$fx$anim$activeAnimations_$$, function($anim$$) {
    $JSCompiler_StaticMethods_cycle$$($anim$$, $now$$1$$)
  });
  $goog$object$isEmpty$$() || $goog$fx$anim$requestAnimationFrame_$$()
}
;
// Input 39
// Input 40
function $goog$fx$TransitionBase$$() {
  $goog$Disposable$$.call(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  this.$endTime$ = this.startTime = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($goog$fx$TransitionBase$$, $goog$events$EventTarget$$);
var $goog$fx$TransitionBase$State$STOPPED$$ = 0;
$goog$fx$TransitionBase$$.prototype.$onBegin$ = function $$goog$fx$TransitionBase$$$$$onBegin$$() {
  this.$dispatchAnimationEvent$("begin")
};
$goog$fx$TransitionBase$$.prototype.$onEnd$ = function $$goog$fx$TransitionBase$$$$$onEnd$$() {
  this.$dispatchAnimationEvent$("end")
};
$goog$fx$TransitionBase$$.prototype.$dispatchAnimationEvent$ = function $$goog$fx$TransitionBase$$$$$dispatchAnimationEvent$$($type$$88$$) {
  this.dispatchEvent($type$$88$$)
};
// Input 41
function $goog$fx$Animation$$($start$$8$$, $end$$4$$, $duration$$10$$, $opt_acc$$) {
  $goog$fx$TransitionBase$$.call(this);
  (!$goog$isArray$$($start$$8$$) || !$goog$isArray$$($end$$4$$)) && $JSCompiler_alias_THROW$$(Error("Start and end parameters must be arrays"));
  $start$$8$$.length != $end$$4$$.length && $JSCompiler_alias_THROW$$(Error("Start and end points must be the same length"));
  this.$startPoint$ = $start$$8$$;
  this.$endPoint$ = $end$$4$$;
  this.duration = $duration$$10$$;
  this.$accel_$ = $opt_acc$$;
  this.coords = [];
  this.$useRightPositioningForRtl_$ = $JSCompiler_alias_FALSE$$
}
$goog$inherits$$($goog$fx$Animation$$, $goog$fx$TransitionBase$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$Animation$$.prototype;
$JSCompiler_prototypeAlias$$.$fps_$ = 0;
$JSCompiler_prototypeAlias$$.progress = 0;
$JSCompiler_prototypeAlias$$.$lastFrame$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.play = function $$JSCompiler_prototypeAlias$$$play$($now$$2_opt_restart$$) {
  if($now$$2_opt_restart$$ || this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$) {
    this.progress = 0, this.coords = this.$startPoint$
  }else {
    if(1 == this.$state_$) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  $goog$fx$anim$unregisterAnimation$$(this);
  this.startTime = $now$$2_opt_restart$$ = $goog$now$$();
  -1 == this.$state_$ && (this.startTime -= this.duration * this.progress);
  this.$endTime$ = this.startTime + this.duration;
  this.$lastFrame$ = this.startTime;
  this.progress || this.$onBegin$();
  this.$dispatchAnimationEvent$("play");
  -1 == this.$state_$ && this.$dispatchAnimationEvent$("resume");
  this.$state_$ = 1;
  var $uid$$inline_143$$ = $goog$getUid$$(this);
  $uid$$inline_143$$ in $goog$fx$anim$activeAnimations_$$ || ($goog$fx$anim$activeAnimations_$$[$uid$$inline_143$$] = this);
  $goog$fx$anim$requestAnimationFrame_$$();
  $JSCompiler_StaticMethods_cycle$$(this, $now$$2_opt_restart$$);
  return $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.stop = function $$JSCompiler_prototypeAlias$$$stop$($opt_gotoEnd$$) {
  $goog$fx$anim$unregisterAnimation$$(this);
  this.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$;
  $opt_gotoEnd$$ && (this.progress = 1);
  $JSCompiler_StaticMethods_updateCoords_$$(this, this.progress);
  this.$dispatchAnimationEvent$("stop");
  this.$onEnd$()
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$state_$ == $goog$fx$TransitionBase$State$STOPPED$$ || this.stop($JSCompiler_alias_FALSE$$);
  this.$dispatchAnimationEvent$("destroy");
  $goog$fx$Animation$$.$superClass_$.$disposeInternal$.call(this)
};
function $JSCompiler_StaticMethods_cycle$$($JSCompiler_StaticMethods_cycle$self$$, $now$$5$$) {
  $JSCompiler_StaticMethods_cycle$self$$.progress = ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.startTime) / ($JSCompiler_StaticMethods_cycle$self$$.$endTime$ - $JSCompiler_StaticMethods_cycle$self$$.startTime);
  1 <= $JSCompiler_StaticMethods_cycle$self$$.progress && ($JSCompiler_StaticMethods_cycle$self$$.progress = 1);
  $JSCompiler_StaticMethods_cycle$self$$.$fps_$ = 1E3 / ($now$$5$$ - $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$);
  $JSCompiler_StaticMethods_cycle$self$$.$lastFrame$ = $now$$5$$;
  $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_cycle$self$$, $JSCompiler_StaticMethods_cycle$self$$.progress);
  1 == $JSCompiler_StaticMethods_cycle$self$$.progress ? ($JSCompiler_StaticMethods_cycle$self$$.$state_$ = $goog$fx$TransitionBase$State$STOPPED$$, $goog$fx$anim$unregisterAnimation$$($JSCompiler_StaticMethods_cycle$self$$), $JSCompiler_StaticMethods_cycle$self$$.$dispatchAnimationEvent$("finish"), $JSCompiler_StaticMethods_cycle$self$$.$onEnd$()) : 1 == $JSCompiler_StaticMethods_cycle$self$$.$state_$ && $JSCompiler_StaticMethods_cycle$self$$.$onAnimate$()
}
function $JSCompiler_StaticMethods_updateCoords_$$($JSCompiler_StaticMethods_updateCoords_$self$$, $t$$) {
  $goog$isFunction$$($JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$) && ($t$$ = $JSCompiler_StaticMethods_updateCoords_$self$$.$accel_$($t$$));
  $JSCompiler_StaticMethods_updateCoords_$self$$.coords = Array($JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length);
  for(var $i$$82$$ = 0;$i$$82$$ < $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$.length;$i$$82$$++) {
    $JSCompiler_StaticMethods_updateCoords_$self$$.coords[$i$$82$$] = ($JSCompiler_StaticMethods_updateCoords_$self$$.$endPoint$[$i$$82$$] - $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$82$$]) * $t$$ + $JSCompiler_StaticMethods_updateCoords_$self$$.$startPoint$[$i$$82$$]
  }
}
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$dispatchAnimationEvent$("animate")
};
$JSCompiler_prototypeAlias$$.$dispatchAnimationEvent$ = function $$JSCompiler_prototypeAlias$$$$dispatchAnimationEvent$$($type$$89$$) {
  this.dispatchEvent(new $goog$fx$AnimationEvent$$($type$$89$$, this))
};
function $goog$fx$AnimationEvent$$($type$$90$$, $anim$$1$$) {
  $goog$events$Event$$.call(this, $type$$90$$);
  this.coords = $anim$$1$$.coords;
  this.x = $anim$$1$$.coords[0];
  this.y = $anim$$1$$.coords[1];
  this.$z$ = $anim$$1$$.coords[2];
  this.duration = $anim$$1$$.duration;
  this.progress = $anim$$1$$.progress;
  this.$fps$ = $anim$$1$$.$fps_$;
  this.state = $anim$$1$$.$state_$;
  this.$anim$ = $anim$$1$$
}
$goog$inherits$$($goog$fx$AnimationEvent$$, $goog$events$Event$$);
// Input 42
// Input 43
// Input 44
// Input 45
function $goog$fx$dom$PredefinedEffect$$($element$$75$$, $start$$9$$, $end$$5$$, $time$$, $opt_acc$$1$$) {
  $goog$fx$Animation$$.call(this, $start$$9$$, $end$$5$$, $time$$, $opt_acc$$1$$);
  this.element = $element$$75$$
}
$goog$inherits$$($goog$fx$dom$PredefinedEffect$$, $goog$fx$Animation$$);
$JSCompiler_prototypeAlias$$ = $goog$fx$dom$PredefinedEffect$$.prototype;
$JSCompiler_prototypeAlias$$.$updateStyle$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  this.$rightToLeft_$ === $JSCompiler_alias_VOID$$ && (this.$rightToLeft_$ = "rtl" == $goog$style$getStyle_$$(this.element));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$onAnimate$ = function $$JSCompiler_prototypeAlias$$$$onAnimate$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onAnimate$.call(this)
};
$JSCompiler_prototypeAlias$$.$onEnd$ = function $$JSCompiler_prototypeAlias$$$$onEnd$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onEnd$.call(this)
};
$JSCompiler_prototypeAlias$$.$onBegin$ = function $$JSCompiler_prototypeAlias$$$$onBegin$$() {
  this.$updateStyle$();
  $goog$fx$dom$PredefinedEffect$$.$superClass_$.$onBegin$.call(this)
};
function $goog$fx$dom$Fade$$($element$$83$$, $start$$17$$, $end$$13$$, $time$$8$$, $opt_acc$$9$$) {
  $goog$isNumber$$($start$$17$$) && ($start$$17$$ = [$start$$17$$]);
  $goog$isNumber$$($end$$13$$) && ($end$$13$$ = [$end$$13$$]);
  $goog$fx$dom$PredefinedEffect$$.call(this, $element$$83$$, $start$$17$$, $end$$13$$, $time$$8$$, $opt_acc$$9$$);
  (1 != $start$$17$$.length || 1 != $end$$13$$.length) && $JSCompiler_alias_THROW$$(Error("Start and end points must be 1D"))
}
$goog$inherits$$($goog$fx$dom$Fade$$, $goog$fx$dom$PredefinedEffect$$);
$goog$fx$dom$Fade$$.prototype.$updateStyle$ = function $$goog$fx$dom$Fade$$$$$updateStyle$$() {
  var $alpha$$inline_156$$ = this.coords[0], $style$$inline_157$$ = this.element.style;
  "opacity" in $style$$inline_157$$ ? $style$$inline_157$$.opacity = $alpha$$inline_156$$ : "MozOpacity" in $style$$inline_157$$ ? $style$$inline_157$$.MozOpacity = $alpha$$inline_156$$ : "filter" in $style$$inline_157$$ && ($style$$inline_157$$.filter = "" === $alpha$$inline_156$$ ? "" : "alpha(opacity=" + 100 * $alpha$$inline_156$$ + ")")
};
$goog$fx$dom$Fade$$.prototype.show = function $$goog$fx$dom$Fade$$$$show$() {
  this.element.style.display = ""
};
$goog$fx$dom$Fade$$.prototype.hide = function $$goog$fx$dom$Fade$$$$hide$() {
  this.element.style.display = "none"
};
function $goog$fx$dom$FadeOutAndHide$$($element$$86$$, $time$$11$$, $opt_acc$$12$$) {
  $goog$fx$dom$Fade$$.call(this, $element$$86$$, 1, 0, $time$$11$$, $opt_acc$$12$$)
}
$goog$inherits$$($goog$fx$dom$FadeOutAndHide$$, $goog$fx$dom$Fade$$);
$goog$fx$dom$FadeOutAndHide$$.prototype.$onBegin$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onBegin$$() {
  this.show();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onBegin$.call(this)
};
$goog$fx$dom$FadeOutAndHide$$.prototype.$onEnd$ = function $$goog$fx$dom$FadeOutAndHide$$$$$onEnd$$() {
  this.hide();
  $goog$fx$dom$FadeOutAndHide$$.$superClass_$.$onEnd$.call(this)
};
// Input 46
// Input 47
function $goog$structs$getCount$$($JSCompiler_temp$$3_JSCompiler_temp$$4_col$$) {
  if("function" == typeof $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$.$getCount$) {
    $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$ = $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$.$getCount$()
  }else {
    if($goog$isArrayLike$$($JSCompiler_temp$$3_JSCompiler_temp$$4_col$$) || $goog$isString$$($JSCompiler_temp$$3_JSCompiler_temp$$4_col$$)) {
      $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$ = $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$.length
    }else {
      var $rv$$inline_160$$ = 0, $key$$inline_161$$;
      for($key$$inline_161$$ in $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$) {
        $rv$$inline_160$$++
      }
      $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$ = $rv$$inline_160$$
    }
  }
  return $JSCompiler_temp$$3_JSCompiler_temp$$4_col$$
}
function $goog$structs$getValues$$($col$$1$$) {
  if("function" == typeof $col$$1$$.$getValues$) {
    return $col$$1$$.$getValues$()
  }
  if($goog$isString$$($col$$1$$)) {
    return $col$$1$$.split("")
  }
  if($goog$isArrayLike$$($col$$1$$)) {
    for(var $rv$$16$$ = [], $l$$15$$ = $col$$1$$.length, $i$$89$$ = 0;$i$$89$$ < $l$$15$$;$i$$89$$++) {
      $rv$$16$$.push($col$$1$$[$i$$89$$])
    }
    return $rv$$16$$
  }
  return $goog$object$getValues$$($col$$1$$)
}
function $goog$structs$every$$($col$$10$$, $f$$42$$) {
  if("function" == typeof $col$$10$$.every) {
    return $col$$10$$.every($f$$42$$, $JSCompiler_alias_VOID$$)
  }
  if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
    return $goog$array$every$$($col$$10$$, $f$$42$$, $JSCompiler_alias_VOID$$)
  }
  var $keys$$5_rv$$inline_164$$;
  if("function" == typeof $col$$10$$.$getKeys$) {
    $keys$$5_rv$$inline_164$$ = $col$$10$$.$getKeys$()
  }else {
    if("function" != typeof $col$$10$$.$getValues$) {
      if($goog$isArrayLike$$($col$$10$$) || $goog$isString$$($col$$10$$)) {
        $keys$$5_rv$$inline_164$$ = [];
        for(var $l$$inline_165_values$$9$$ = $col$$10$$.length, $i$$inline_166_l$$21$$ = 0;$i$$inline_166_l$$21$$ < $l$$inline_165_values$$9$$;$i$$inline_166_l$$21$$++) {
          $keys$$5_rv$$inline_164$$.push($i$$inline_166_l$$21$$)
        }
      }else {
        $keys$$5_rv$$inline_164$$ = $goog$object$getKeys$$($col$$10$$)
      }
    }else {
      $keys$$5_rv$$inline_164$$ = $JSCompiler_alias_VOID$$
    }
  }
  for(var $l$$inline_165_values$$9$$ = $goog$structs$getValues$$($col$$10$$), $i$$inline_166_l$$21$$ = $l$$inline_165_values$$9$$.length, $i$$95$$ = 0;$i$$95$$ < $i$$inline_166_l$$21$$;$i$$95$$++) {
    if(!$f$$42$$.call($JSCompiler_alias_VOID$$, $l$$inline_165_values$$9$$[$i$$95$$], $keys$$5_rv$$inline_164$$ && $keys$$5_rv$$inline_164$$[$i$$95$$], $col$$10$$)) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
}
;
// Input 48
function $goog$structs$Map$$($opt_map$$, $var_args$$81$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2$$ = arguments.length;
  if(1 < $argLength$$2$$) {
    $argLength$$2$$ % 2 && $JSCompiler_alias_THROW$$(Error("Uneven number of arguments"));
    for(var $i$$96$$ = 0;$i$$96$$ < $argLength$$2$$;$i$$96$$ += 2) {
      this.set(arguments[$i$$96$$], arguments[$i$$96$$ + 1])
    }
  }else {
    $opt_map$$ && this.$addAll$($opt_map$$)
  }
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Map$$.prototype;
$JSCompiler_prototypeAlias$$.$count_$ = 0;
$JSCompiler_prototypeAlias$$.$version_$ = 0;
$JSCompiler_prototypeAlias$$.$getCount$ = $JSCompiler_get$$("$count_$");
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $rv$$20$$ = [], $i$$97$$ = 0;$i$$97$$ < this.$keys_$.length;$i$$97$$++) {
    $rv$$20$$.push(this.$map_$[this.$keys_$[$i$$97$$]])
  }
  return $rv$$20$$
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function $$JSCompiler_prototypeAlias$$$$getKeys$$() {
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  return this.$keys_$.concat()
};
$JSCompiler_prototypeAlias$$.$containsValue$ = function $$JSCompiler_prototypeAlias$$$$containsValue$$($val$$30$$) {
  for(var $i$$98$$ = 0;$i$$98$$ < this.$keys_$.length;$i$$98$$++) {
    var $key$$55$$ = this.$keys_$[$i$$98$$];
    if($goog$structs$Map$hasKey_$$(this.$map_$, $key$$55$$) && this.$map_$[$key$$55$$] == $val$$30$$) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($otherMap$$, $opt_equalityFn$$) {
  if(this === $otherMap$$) {
    return $JSCompiler_alias_TRUE$$
  }
  if(this.$count_$ != $otherMap$$.$getCount$()) {
    return $JSCompiler_alias_FALSE$$
  }
  var $equalityFn$$ = $opt_equalityFn$$ || $goog$structs$Map$defaultEquals$$;
  $JSCompiler_StaticMethods_cleanupKeysArray_$$(this);
  for(var $key$$56$$, $i$$99$$ = 0;$key$$56$$ = this.$keys_$[$i$$99$$];$i$$99$$++) {
    if(!$equalityFn$$(this.get($key$$56$$), $otherMap$$.get($key$$56$$))) {
      return $JSCompiler_alias_FALSE$$
    }
  }
  return $JSCompiler_alias_TRUE$$
};
function $goog$structs$Map$defaultEquals$$($a$$30$$, $b$$31$$) {
  return $a$$30$$ === $b$$31$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$ = {};
  this.$version_$ = this.$count_$ = this.$keys_$.length = 0
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($key$$57$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$57$$) ? (delete this.$map_$[$key$$57$$], this.$count_$--, this.$version_$++, this.$keys_$.length > 2 * this.$count_$ && $JSCompiler_StaticMethods_cleanupKeysArray_$$(this), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$58$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$58$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$58$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$58$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$58$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$58$$, $seen$$2$$[$key$$58$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$JSCompiler_prototypeAlias$$.get = function $$JSCompiler_prototypeAlias$$$get$($key$$59$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$59$$) ? this.$map_$[$key$$59$$] : $opt_val$$1$$
};
$JSCompiler_prototypeAlias$$.set = function $$JSCompiler_prototypeAlias$$$set$($key$$60$$, $value$$77$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$60$$) || (this.$count_$++, this.$keys_$.push($key$$60$$), this.$version_$++);
  this.$map_$[$key$$60$$] = $value$$77$$
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($map$$7_values$$10$$) {
  var $keys$$6$$;
  $map$$7_values$$10$$ instanceof $goog$structs$Map$$ ? ($keys$$6$$ = $map$$7_values$$10$$.$getKeys$(), $map$$7_values$$10$$ = $map$$7_values$$10$$.$getValues$()) : ($keys$$6$$ = $goog$object$getKeys$$($map$$7_values$$10$$), $map$$7_values$$10$$ = $goog$object$getValues$$($map$$7_values$$10$$));
  for(var $i$$100$$ = 0;$i$$100$$ < $keys$$6$$.length;$i$$100$$++) {
    this.set($keys$$6$$[$i$$100$$], $map$$7_values$$10$$[$i$$100$$])
  }
};
function $goog$structs$Map$hasKey_$$($obj$$92$$, $key$$64$$) {
  return Object.prototype.hasOwnProperty.call($obj$$92$$, $key$$64$$)
}
;
// Input 49
// Input 50
function $goog$structs$Set$$($opt_values$$1$$) {
  this.$map_$ = new $goog$structs$Map$$;
  $opt_values$$1$$ && this.$addAll$($opt_values$$1$$)
}
function $goog$structs$Set$getKey_$$($val$$31$$) {
  var $type$$91$$ = typeof $val$$31$$;
  return"object" == $type$$91$$ && $val$$31$$ || "function" == $type$$91$$ ? "o" + $goog$getUid$$($val$$31$$) : $type$$91$$.substr(0, 1) + $val$$31$$
}
$JSCompiler_prototypeAlias$$ = $goog$structs$Set$$.prototype;
$JSCompiler_prototypeAlias$$.$getCount$ = function $$JSCompiler_prototypeAlias$$$$getCount$$() {
  return this.$map_$.$getCount$()
};
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($element$$91$$) {
  this.$map_$.set($goog$structs$Set$getKey_$$($element$$91$$), $element$$91$$)
};
$JSCompiler_prototypeAlias$$.$addAll$ = function $$JSCompiler_prototypeAlias$$$$addAll$$($col$$11_values$$11$$) {
  $col$$11_values$$11$$ = $goog$structs$getValues$$($col$$11_values$$11$$);
  for(var $l$$22$$ = $col$$11_values$$11$$.length, $i$$104$$ = 0;$i$$104$$ < $l$$22$$;$i$$104$$++) {
    this.add($col$$11_values$$11$$[$i$$104$$])
  }
};
$JSCompiler_prototypeAlias$$.$removeAll$ = function $$JSCompiler_prototypeAlias$$$$removeAll$$($col$$12_values$$12$$) {
  $col$$12_values$$12$$ = $goog$structs$getValues$$($col$$12_values$$12$$);
  for(var $l$$23$$ = $col$$12_values$$12$$.length, $i$$105$$ = 0;$i$$105$$ < $l$$23$$;$i$$105$$++) {
    this.remove($col$$12_values$$12$$[$i$$105$$])
  }
};
$JSCompiler_prototypeAlias$$.remove = function $$JSCompiler_prototypeAlias$$$remove$($element$$92$$) {
  return this.$map_$.remove($goog$structs$Set$getKey_$$($element$$92$$))
};
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$map_$.clear()
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($element$$93_key$$inline_169$$) {
  $element$$93_key$$inline_169$$ = $goog$structs$Set$getKey_$$($element$$93_key$$inline_169$$);
  return $goog$structs$Map$hasKey_$$(this.$map_$.$map_$, $element$$93_key$$inline_169$$)
};
$JSCompiler_prototypeAlias$$.$getValues$ = function $$JSCompiler_prototypeAlias$$$$getValues$$() {
  return this.$map_$.$getValues$()
};
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($col$$16$$) {
  return this.$getCount$() == $goog$structs$getCount$$($col$$16$$) && $JSCompiler_StaticMethods_isSubsetOf$$(this, $col$$16$$)
};
function $JSCompiler_StaticMethods_isSubsetOf$$($JSCompiler_StaticMethods_isSubsetOf$self$$, $col$$17$$) {
  var $colCount$$ = $goog$structs$getCount$$($col$$17$$);
  if($JSCompiler_StaticMethods_isSubsetOf$self$$.$getCount$() > $colCount$$) {
    return $JSCompiler_alias_FALSE$$
  }
  !($col$$17$$ instanceof $goog$structs$Set$$) && 5 < $colCount$$ && ($col$$17$$ = new $goog$structs$Set$$($col$$17$$));
  return $goog$structs$every$$($JSCompiler_StaticMethods_isSubsetOf$self$$, function($JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$) {
    if("function" == typeof $col$$17$$.contains) {
      $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$ = $col$$17$$.contains($JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$)
    }else {
      if("function" == typeof $col$$17$$.$containsValue$) {
        $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$ = $col$$17$$.$containsValue$($JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$)
      }else {
        if($goog$isArrayLike$$($col$$17$$) || $goog$isString$$($col$$17$$)) {
          $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$ = $goog$array$contains$$($col$$17$$, $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$)
        }else {
          a: {
            for(var $key$$inline_784$$ in $col$$17$$) {
              if($col$$17$$[$key$$inline_784$$] == $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$) {
                $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$ = $JSCompiler_alias_TRUE$$;
                break a
              }
            }
            $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$ = $JSCompiler_alias_FALSE$$
          }
        }
      }
    }
    return $JSCompiler_temp$$765_JSCompiler_temp$$766_JSCompiler_temp$$767_value$$80$$
  })
}
;
// Input 51
function $goog$events$EventHandler$$($opt_handler$$11$$) {
  $goog$Disposable$$.call(this);
  this.$handler_$ = $opt_handler$$11$$;
  this.$keys_$ = []
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$self$$, $src$$17$$, $type$$92$$, $opt_fn$$4$$) {
  $goog$isArray$$($type$$92$$) || ($goog$events$EventHandler$typeArray_$$[0] = $type$$92$$, $type$$92$$ = $goog$events$EventHandler$typeArray_$$);
  for(var $i$$107$$ = 0;$i$$107$$ < $type$$92$$.length;$i$$107$$++) {
    var $key$$65$$ = $goog$events$listen$$($src$$17$$, $type$$92$$[$i$$107$$], $opt_fn$$4$$ || $JSCompiler_StaticMethods_listen$self$$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_listen$self$$.$handler_$ || $JSCompiler_StaticMethods_listen$self$$);
    $JSCompiler_StaticMethods_listen$self$$.$keys_$.push($key$$65$$)
  }
  return $JSCompiler_StaticMethods_listen$self$$
}
function $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$66_src$$18$$, $type$$93$$, $opt_fn$$5$$, $opt_capture$$6$$, $opt_handler$$13$$) {
  if($goog$isArray$$($type$$93$$)) {
    for(var $i$$108$$ = 0;$i$$108$$ < $type$$93$$.length;$i$$108$$++) {
      $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_listenOnce$self$$, $key$$66_src$$18$$, $type$$93$$[$i$$108$$], $opt_fn$$5$$, $opt_capture$$6$$, $opt_handler$$13$$)
    }
  }else {
    $key$$66_src$$18$$ = $goog$events$listenOnce$$($key$$66_src$$18$$, $type$$93$$, $opt_fn$$5$$ || $JSCompiler_StaticMethods_listenOnce$self$$, $opt_capture$$6$$, $opt_handler$$13$$ || $JSCompiler_StaticMethods_listenOnce$self$$.$handler_$ || $JSCompiler_StaticMethods_listenOnce$self$$), $JSCompiler_StaticMethods_listenOnce$self$$.$keys_$.push($key$$66_src$$18$$)
  }
}
function $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$, $i$$inline_178_type$$94$$, $listener$$inline_173_opt_fn$$6$$, $capture$$inline_176_opt_capture$$7$$, $opt_handler$$15_opt_handler$$inline_175$$) {
  if($goog$isArray$$($i$$inline_178_type$$94$$)) {
    for(var $i$$109$$ = 0;$i$$109$$ < $i$$inline_178_type$$94$$.length;$i$$109$$++) {
      $JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$self$$, $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$, $i$$inline_178_type$$94$$[$i$$109$$], $listener$$inline_173_opt_fn$$6$$, $capture$$inline_176_opt_capture$$7$$, $opt_handler$$15_opt_handler$$inline_175$$)
    }
  }else {
    a: {
      $listener$$inline_173_opt_fn$$6$$ = $listener$$inline_173_opt_fn$$6$$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $opt_handler$$15_opt_handler$$inline_175$$ = $opt_handler$$15_opt_handler$$inline_175$$ || $JSCompiler_StaticMethods_unlisten$self$$.$handler_$ || $JSCompiler_StaticMethods_unlisten$self$$;
      $capture$$inline_176_opt_capture$$7$$ = !!$capture$$inline_176_opt_capture$$7$$;
      if($key$$67_listener$$61_listenerArray$$inline_177_src$$20$$ = $goog$events$getListeners_$$($key$$67_listener$$61_listenerArray$$inline_177_src$$20$$, $i$$inline_178_type$$94$$, $capture$$inline_176_opt_capture$$7$$)) {
        for($i$$inline_178_type$$94$$ = 0;$i$$inline_178_type$$94$$ < $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$.length;$i$$inline_178_type$$94$$++) {
          if(!$key$$67_listener$$61_listenerArray$$inline_177_src$$20$$[$i$$inline_178_type$$94$$].$removed$ && $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$[$i$$inline_178_type$$94$$].$listener$ == $listener$$inline_173_opt_fn$$6$$ && $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$[$i$$inline_178_type$$94$$].capture == $capture$$inline_176_opt_capture$$7$$ && $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$[$i$$inline_178_type$$94$$].$handler$ == $opt_handler$$15_opt_handler$$inline_175$$) {
            $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$ = $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$[$i$$inline_178_type$$94$$];
            break a
          }
        }
      }
      $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$ = $JSCompiler_alias_NULL$$
    }
    $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$ && ($key$$67_listener$$61_listenerArray$$inline_177_src$$20$$ = $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$.key, $goog$events$unlistenByKey$$($key$$67_listener$$61_listenerArray$$inline_177_src$$20$$), $goog$array$remove$$($JSCompiler_StaticMethods_unlisten$self$$.$keys_$, $key$$67_listener$$61_listenerArray$$inline_177_src$$20$$))
  }
  return $JSCompiler_StaticMethods_unlisten$self$$
}
$goog$events$EventHandler$$.prototype.$removeAll$ = function $$goog$events$EventHandler$$$$$removeAll$$() {
  $goog$array$forEach$$(this.$keys_$, $goog$events$unlistenByKey$$);
  this.$keys_$.length = 0
};
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function $$goog$events$EventHandler$$$$$disposeInternal$$() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.$removeAll$()
};
$goog$events$EventHandler$$.prototype.handleEvent = function $$goog$events$EventHandler$$$$handleEvent$() {
  $JSCompiler_alias_THROW$$(Error("EventHandler.handleEvent not implemented"))
};
// Input 52
function $goog$ui$IdGenerator$$() {
}
$goog$addSingletonGetter$$($goog$ui$IdGenerator$$);
$goog$ui$IdGenerator$$.prototype.$nextId_$ = 0;
$goog$ui$IdGenerator$$.$getInstance$();
// Input 53
function $goog$ui$Component$$($opt_domHelper$$2$$) {
  $goog$Disposable$$.call(this);
  this.$dom_$ = $opt_domHelper$$2$$ || $goog$dom$getDomHelper$$();
  this.$rightToLeft_$ = $goog$ui$Component$defaultRightToLeft_$$
}
$goog$inherits$$($goog$ui$Component$$, $goog$events$EventTarget$$);
$goog$ui$Component$$.prototype.$idGenerator_$ = $goog$ui$IdGenerator$$.$getInstance$();
var $goog$ui$Component$defaultRightToLeft_$$ = $JSCompiler_alias_NULL$$;
function $goog$ui$Component$getStateTransitionEvent$$($state$$, $isEntering$$) {
  switch($state$$) {
    case 1:
      return $isEntering$$ ? "disable" : "enable";
    case 2:
      return $isEntering$$ ? "highlight" : "unhighlight";
    case 4:
      return $isEntering$$ ? "activate" : "deactivate";
    case 8:
      return $isEntering$$ ? "select" : "unselect";
    case 16:
      return $isEntering$$ ? "check" : "uncheck";
    case 32:
      return $isEntering$$ ? "focus" : "blur";
    case 64:
      return $isEntering$$ ? "open" : "close"
  }
  $JSCompiler_alias_THROW$$(Error("Invalid component state"))
}
$JSCompiler_prototypeAlias$$ = $goog$ui$Component$$.prototype;
$JSCompiler_prototypeAlias$$.$id_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$inDocument_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$rightToLeft_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$model_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$parent_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$children_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$childIndex_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$wasDecorated_$ = $JSCompiler_alias_FALSE$$;
function $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_getId$self$$) {
  return $JSCompiler_StaticMethods_getId$self$$.$id_$ || ($JSCompiler_StaticMethods_getId$self$$.$id_$ = ":" + ($JSCompiler_StaticMethods_getId$self$$.$idGenerator_$.$nextId_$++).toString(36))
}
function $JSCompiler_StaticMethods_setId$$($JSCompiler_StaticMethods_setId$self$$, $id$$3$$) {
  if($JSCompiler_StaticMethods_setId$self$$.$parent_$ && $JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$) {
    var $obj$$inline_786$$ = $JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $key$$inline_787$$ = $JSCompiler_StaticMethods_setId$self$$.$id_$;
    $key$$inline_787$$ in $obj$$inline_786$$ && delete $obj$$inline_786$$[$key$$inline_787$$];
    $goog$object$add$$($JSCompiler_StaticMethods_setId$self$$.$parent_$.$childIndex_$, $id$$3$$, $JSCompiler_StaticMethods_setId$self$$)
  }
  $JSCompiler_StaticMethods_setId$self$$.$id_$ = $id$$3$$
}
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$getElementByClass$ = function $$JSCompiler_prototypeAlias$$$$getElementByClass$$($className$$16$$) {
  return this.$element_$ ? this.$dom_$.$getElementByClass$($className$$16$$, this.$element_$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$googUiComponentHandler_$ || (this.$googUiComponentHandler_$ = new $goog$events$EventHandler$$(this))
};
function $JSCompiler_StaticMethods_setParent$$($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$) {
  $JSCompiler_StaticMethods_setParent$self$$ == $parent$$21$$ && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $parent$$21$$ && ($JSCompiler_StaticMethods_setParent$self$$.$parent_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$ && $JSCompiler_StaticMethods_setParent$self$$.$id_$ && $goog$object$get$$($JSCompiler_StaticMethods_setParent$self$$.$parent_$.$childIndex_$, $JSCompiler_StaticMethods_setParent$self$$.$id_$) && $JSCompiler_StaticMethods_setParent$self$$.$parent_$ != $parent$$21$$) && $JSCompiler_alias_THROW$$(Error("Unable to set parent component"));
  $JSCompiler_StaticMethods_setParent$self$$.$parent_$ = $parent$$21$$;
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call($JSCompiler_StaticMethods_setParent$self$$, $parent$$21$$)
}
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$setParentEventTarget$ = function $$JSCompiler_prototypeAlias$$$$setParentEventTarget$$($parent$$22$$) {
  this.$parent_$ && this.$parent_$ != $parent$$22$$ && $JSCompiler_alias_THROW$$(Error("Method not supported"));
  $goog$ui$Component$$.$superClass_$.$setParentEventTarget$.call(this, $parent$$22$$)
};
$JSCompiler_prototypeAlias$$.$getDomHelper$ = $JSCompiler_get$$("$dom_$");
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$dom_$.createElement("div")
};
$JSCompiler_prototypeAlias$$.render = function $$JSCompiler_prototypeAlias$$$render$($opt_parentElement$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$element_$ || this.$createDom$();
  $opt_parentElement$$ ? $opt_parentElement$$.insertBefore(this.$element_$, $JSCompiler_alias_NULL$$) : this.$dom_$.$document_$.body.appendChild(this.$element_$);
  (!this.$parent_$ || this.$parent_$.$inDocument_$) && this.$enterDocument$()
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($element$$95$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  if($element$$95$$ && this.$canDecorate$($element$$95$$)) {
    this.$wasDecorated_$ = $JSCompiler_alias_TRUE$$;
    if(!this.$dom_$ || this.$dom_$.$document_$ != $goog$dom$getOwnerDocument$$($element$$95$$)) {
      this.$dom_$ = $goog$dom$getDomHelper$$($element$$95$$)
    }
    this.$decorateInternal$($element$$95$$);
    this.$enterDocument$()
  }else {
    $JSCompiler_alias_THROW$$(Error("Invalid element to decorate"))
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  this.$inDocument_$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$8$$) {
    !$child$$8$$.$inDocument_$ && $child$$8$$.$getElement$() && $child$$8$$.$enterDocument$()
  })
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$9$$) {
    $child$$9$$.$inDocument_$ && $child$$9$$.$exitDocument$()
  });
  this.$googUiComponentHandler_$ && this.$googUiComponentHandler_$.$removeAll$();
  this.$inDocument_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  this.$inDocument_$ && this.$exitDocument$();
  this.$googUiComponentHandler_$ && (this.$googUiComponentHandler_$.$dispose$(), delete this.$googUiComponentHandler_$);
  $JSCompiler_StaticMethods_forEachChild$$(this, function($child$$10$$) {
    $child$$10$$.$dispose$()
  });
  !this.$wasDecorated_$ && this.$element_$ && $goog$dom$removeNode$$(this.$element_$);
  this.$parent_$ = this.$model_$ = this.$element_$ = this.$childIndex_$ = this.$children_$ = $JSCompiler_alias_NULL$$;
  $goog$ui$Component$$.$superClass_$.$disposeInternal$.call(this)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = $JSCompiler_get$$("$element_$");
$JSCompiler_prototypeAlias$$.$isRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$isRightToLeft$$() {
  this.$rightToLeft_$ == $JSCompiler_alias_NULL$$ && (this.$rightToLeft_$ = "rtl" == $goog$style$getStyle_$$(this.$inDocument_$ ? this.$element_$ : this.$dom_$.$document_$.body));
  return this.$rightToLeft_$
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$1$$) {
  this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  this.$rightToLeft_$ = $rightToLeft$$1$$
};
function $JSCompiler_StaticMethods_forEachChild$$($JSCompiler_StaticMethods_forEachChild$self$$, $f$$43$$) {
  $JSCompiler_StaticMethods_forEachChild$self$$.$children_$ && $goog$array$forEach$$($JSCompiler_StaticMethods_forEachChild$self$$.$children_$, $f$$43$$, $JSCompiler_alias_VOID$$)
}
$JSCompiler_prototypeAlias$$.removeChild = function $$JSCompiler_prototypeAlias$$$removeChild$($child$$15$$, $opt_unrender$$) {
  if($child$$15$$) {
    var $id$$6$$ = $goog$isString$$($child$$15$$) ? $child$$15$$ : $JSCompiler_StaticMethods_getId$$($child$$15$$);
    $child$$15$$ = this.$childIndex_$ && $id$$6$$ ? $goog$object$get$$(this.$childIndex_$, $id$$6$$) || $JSCompiler_alias_NULL$$ : $JSCompiler_alias_NULL$$;
    if($id$$6$$ && $child$$15$$) {
      var $obj$$inline_789$$ = this.$childIndex_$;
      $id$$6$$ in $obj$$inline_789$$ && delete $obj$$inline_789$$[$id$$6$$];
      $goog$array$remove$$(this.$children_$, $child$$15$$);
      $opt_unrender$$ && ($child$$15$$.$exitDocument$(), $child$$15$$.$element_$ && $goog$dom$removeNode$$($child$$15$$.$element_$));
      $JSCompiler_StaticMethods_setParent$$($child$$15$$, $JSCompiler_alias_NULL$$)
    }
  }
  $child$$15$$ || $JSCompiler_alias_THROW$$(Error("Child is not in parent component"));
  return $child$$15$$
};
// Input 54
function $uniform$InputFilters$$() {
  this.$InputFilters_$ = new $goog$structs$Map$$;
  this.$InputFilters_$.set("number", [this.$filterNumber_$, 0]);
  this.$InputFilters_$.set("integer", [this.$filterInteger_$, 0]);
  this.$InputFilters_$.set("non_space", [this.$filterNonSpace_$, 0])
}
$goog$addSingletonGetter$$($uniform$InputFilters$$);
$JSCompiler_prototypeAlias$$ = $uniform$InputFilters$$.prototype;
$JSCompiler_prototypeAlias$$.$InputFilters_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.filter = function $$JSCompiler_prototypeAlias$$$filter$($e$$28$$) {
  for(var $InputFilterAttribute_elClassesArray$$ = $e$$28$$.target.getAttribute("uniform-filters"), $InputFilterAttribute_elClassesArray$$ = $InputFilterAttribute_elClassesArray$$ && "function" == typeof $InputFilterAttribute_elClassesArray$$.split ? $InputFilterAttribute_elClassesArray$$.split(/\s+/) : [], $i$$110$$ = 0;$i$$110$$ < $InputFilterAttribute_elClassesArray$$.length;++$i$$110$$) {
    var $InputFilterRecord_params$$4$$ = this.$InputFilters_$.get($InputFilterAttribute_elClassesArray$$[$i$$110$$], [$goog$nullFunction$$, 0]), $InputFilterFn$$1$$ = $InputFilterRecord_params$$4$$[0], $number_of_parameters$$ = 0;
    $InputFilterRecord_params$$4$$[1] != $JSCompiler_alias_NULL$$ && ($number_of_parameters$$ = $InputFilterRecord_params$$4$$[1]);
    $InputFilterRecord_params$$4$$ = [];
    if($number_of_parameters$$) {
      for(var $j$$7$$ = 1 + $i$$110$$, $k$$ = 0;$j$$7$$ <= $InputFilterAttribute_elClassesArray$$.length && $k$$ < $number_of_parameters$$;++$k$$, ++$j$$7$$, ++$i$$110$$) {
        $InputFilterRecord_params$$4$$.push($InputFilterAttribute_elClassesArray$$[$j$$7$$])
      }
      if($InputFilterRecord_params$$4$$.length < $number_of_parameters$$) {
        continue
      }
    }
    if($goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$28$$)) {
      switch($e$$28$$.keyCode) {
        case $goog$events$KeyCodes$NUM_CENTER$$:
        ;
        case $goog$events$KeyCodes$MAC_ENTER$$:
        ;
        case $goog$events$KeyCodes$ENTER$$:
        ;
        case $goog$events$KeyCodes$$.$NUMPAD_ENTER$:
        ;
        case $goog$events$KeyCodes$DELETE$$:
        ;
        case $goog$events$KeyCodes$BACKSPACE$$:
        ;
        case $goog$events$KeyCodes$TAB$$:
          return;
        default:
          $InputFilterFn$$1$$($e$$28$$, $InputFilterRecord_params$$4$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$filterNumber_$ = function $$JSCompiler_prototypeAlias$$$$filterNumber_$$($e$$29$$) {
  !$e$$29$$.ctrlKey && !(!$e$$29$$.shiftKey && $e$$29$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$29$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$29$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$29$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$ || $e$$29$$.keyCode == $goog$events$KeyCodes$NUM_MINUS$$ || $e$$29$$.keyCode == $goog$events$KeyCodes$NUM_PERIOD$$ || $e$$29$$.keyCode == $goog$events$KeyCodes$PERIOD$$ || $e$$29$$.keyCode == $goog$events$KeyCodes$COMMA$$ || $e$$29$$.keyCode == 
  $goog$events$KeyCodes$E$$) && $e$$29$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$filterInteger_$ = function $$JSCompiler_prototypeAlias$$$$filterInteger_$$($e$$30$$) {
  !$e$$30$$.ctrlKey && !(!$e$$30$$.shiftKey && $e$$30$$.keyCode >= $goog$events$KeyCodes$ZERO$$ && $e$$30$$.keyCode <= $goog$events$KeyCodes$NINE$$ || $e$$30$$.keyCode >= $goog$events$KeyCodes$NUM_ZERO$$ && $e$$30$$.keyCode <= $goog$events$KeyCodes$NUM_NINE$$) && $e$$30$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$filterNonSpace_$ = function $$JSCompiler_prototypeAlias$$$$filterNonSpace_$$($e$$31$$) {
  $e$$31$$.keyCode == $goog$events$KeyCodes$SPACE$$ && $e$$31$$.preventDefault()
};
// Input 55
function $goog$dom$forms$getFormDataString$$($form$$1$$) {
  for(var $sb$$2$$ = [], $fnAppend$$inline_203$$ = $goog$dom$forms$addFormDataToStringBuffer_$$, $els$$inline_204_inputs$$inline_211$$ = $form$$1$$.elements, $el$$inline_205_input$$inline_212_values$$inline_208$$, $i$$inline_206$$ = 0;$el$$inline_205_input$$inline_212_values$$inline_208$$ = $els$$inline_204_inputs$$inline_211$$[$i$$inline_206$$];$i$$inline_206$$++) {
    if(!($el$$inline_205_input$$inline_212_values$$inline_208$$.form != $form$$1$$ || $el$$inline_205_input$$inline_212_values$$inline_208$$.disabled || "fieldset" == $el$$inline_205_input$$inline_212_values$$inline_208$$.tagName.toLowerCase())) {
      var $name$$inline_207$$ = $el$$inline_205_input$$inline_212_values$$inline_208$$.name;
      switch($el$$inline_205_input$$inline_212_values$$inline_208$$.type.toLowerCase()) {
        case "file":
        ;
        case "submit":
        ;
        case "reset":
        ;
        case "button":
          break;
        case "select-multiple":
          $el$$inline_205_input$$inline_212_values$$inline_208$$ = $goog$dom$forms$getValue$$($el$$inline_205_input$$inline_212_values$$inline_208$$);
          if($el$$inline_205_input$$inline_212_values$$inline_208$$ != $JSCompiler_alias_NULL$$) {
            for(var $value$$inline_209$$, $j$$inline_210$$ = 0;$value$$inline_209$$ = $el$$inline_205_input$$inline_212_values$$inline_208$$[$j$$inline_210$$];$j$$inline_210$$++) {
              $fnAppend$$inline_203$$($sb$$2$$, $name$$inline_207$$, $value$$inline_209$$)
            }
          }
          break;
        default:
          $value$$inline_209$$ = $goog$dom$forms$getValue$$($el$$inline_205_input$$inline_212_values$$inline_208$$), $value$$inline_209$$ != $JSCompiler_alias_NULL$$ && $fnAppend$$inline_203$$($sb$$2$$, $name$$inline_207$$, $value$$inline_209$$)
      }
    }
  }
  $els$$inline_204_inputs$$inline_211$$ = $form$$1$$.getElementsByTagName("input");
  for($i$$inline_206$$ = 0;$el$$inline_205_input$$inline_212_values$$inline_208$$ = $els$$inline_204_inputs$$inline_211$$[$i$$inline_206$$];$i$$inline_206$$++) {
    $el$$inline_205_input$$inline_212_values$$inline_208$$.form == $form$$1$$ && "image" == $el$$inline_205_input$$inline_212_values$$inline_208$$.type.toLowerCase() && ($name$$inline_207$$ = $el$$inline_205_input$$inline_212_values$$inline_208$$.name, $fnAppend$$inline_203$$($sb$$2$$, $name$$inline_207$$, $el$$inline_205_input$$inline_212_values$$inline_208$$.value), $fnAppend$$inline_203$$($sb$$2$$, $name$$inline_207$$ + ".x", "0"), $fnAppend$$inline_203$$($sb$$2$$, $name$$inline_207$$ + ".y", 
    "0"))
  }
  return $sb$$2$$.join("&")
}
function $goog$dom$forms$addFormDataToStringBuffer_$$($sb$$3$$, $name$$69$$, $value$$83$$) {
  $sb$$3$$.push(encodeURIComponent($name$$69$$) + "=" + encodeURIComponent($value$$83$$))
}
function $goog$dom$forms$getValue$$($el$$35$$) {
  var $selectedIndex$$inline_215_type$$95_values$$inline_218$$ = $el$$35$$.type;
  if($selectedIndex$$inline_215_type$$95_values$$inline_218$$ === $JSCompiler_alias_VOID$$) {
    return $JSCompiler_alias_NULL$$
  }
  switch($selectedIndex$$inline_215_type$$95_values$$inline_218$$.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return $el$$35$$.checked ? $el$$35$$.value : $JSCompiler_alias_NULL$$;
    case "select-one":
      return $selectedIndex$$inline_215_type$$95_values$$inline_218$$ = $el$$35$$.selectedIndex, 0 <= $selectedIndex$$inline_215_type$$95_values$$inline_218$$ ? $el$$35$$.options[$selectedIndex$$inline_215_type$$95_values$$inline_218$$].value : $JSCompiler_alias_NULL$$;
    case "select-multiple":
      for(var $selectedIndex$$inline_215_type$$95_values$$inline_218$$ = [], $option$$inline_219$$, $i$$inline_220$$ = 0;$option$$inline_219$$ = $el$$35$$.options[$i$$inline_220$$];$i$$inline_220$$++) {
        $option$$inline_219$$.selected && $selectedIndex$$inline_215_type$$95_values$$inline_218$$.push($option$$inline_219$$.value)
      }
      return $selectedIndex$$inline_215_type$$95_values$$inline_218$$.length ? $selectedIndex$$inline_215_type$$95_values$$inline_218$$ : $JSCompiler_alias_NULL$$;
    default:
      return $el$$35$$.value !== $JSCompiler_alias_VOID$$ ? $el$$35$$.value : $JSCompiler_alias_NULL$$
  }
}
function $goog$dom$forms$setValue$$($el$$39$$, $opt_value$$6$$) {
  var $opt_value$$inline_231_option$$inline_227_type$$96$$ = $el$$39$$.type;
  if($opt_value$$inline_231_option$$inline_227_type$$96$$ !== $JSCompiler_alias_VOID$$) {
    switch($opt_value$$inline_231_option$$inline_227_type$$96$$.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        $el$$39$$.checked = $opt_value$$6$$ ? "checked" : $JSCompiler_alias_NULL$$;
        break;
      case "select-one":
        $el$$39$$.selectedIndex = -1;
        if($goog$isString$$($opt_value$$6$$)) {
          for(var $i$$inline_228_option$$inline_232$$ = 0;$opt_value$$inline_231_option$$inline_227_type$$96$$ = $el$$39$$.options[$i$$inline_228_option$$inline_232$$];$i$$inline_228_option$$inline_232$$++) {
            if($opt_value$$inline_231_option$$inline_227_type$$96$$.value == $opt_value$$6$$) {
              $opt_value$$inline_231_option$$inline_227_type$$96$$.selected = $JSCompiler_alias_TRUE$$;
              break
            }
          }
        }
        break;
      case "select-multiple":
        $opt_value$$inline_231_option$$inline_227_type$$96$$ = $opt_value$$6$$;
        $goog$isString$$($opt_value$$inline_231_option$$inline_227_type$$96$$) && ($opt_value$$inline_231_option$$inline_227_type$$96$$ = [$opt_value$$inline_231_option$$inline_227_type$$96$$]);
        for(var $i$$inline_233$$ = 0;$i$$inline_228_option$$inline_232$$ = $el$$39$$.options[$i$$inline_233$$];$i$$inline_233$$++) {
          if($i$$inline_228_option$$inline_232$$.selected = $JSCompiler_alias_FALSE$$, $opt_value$$inline_231_option$$inline_227_type$$96$$) {
            for(var $value$$inline_234$$, $j$$inline_235$$ = 0;$value$$inline_234$$ = $opt_value$$inline_231_option$$inline_227_type$$96$$[$j$$inline_235$$];$j$$inline_235$$++) {
              $i$$inline_228_option$$inline_232$$.value == $value$$inline_234$$ && ($i$$inline_228_option$$inline_232$$.selected = $JSCompiler_alias_TRUE$$)
            }
          }
        }
        break;
      default:
        $el$$39$$.value = $opt_value$$6$$ != $JSCompiler_alias_NULL$$ ? $opt_value$$6$$ : ""
    }
  }
}
;
// Input 56
function $uniform$util$interpretToken$$($inputValue_token$$4$$) {
  var $result$$15$$ = $inputValue_token$$4$$ + " ";
  $goog$dom$getElement$$($inputValue_token$$4$$) != $JSCompiler_alias_NULL$$ ? ($inputValue_token$$4$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$($inputValue_token$$4$$)), $result$$15$$ = $inputValue_token$$4$$ != $JSCompiler_alias_NULL$$ ? "'" + $inputValue_token$$4$$ + "' " : "null ") : "and" == $inputValue_token$$4$$ ? $result$$15$$ = " && " : "or" == $inputValue_token$$4$$ && ($result$$15$$ = " || ");
  return $result$$15$$
}
function $uniform$util$compileMetaTags$$($metaInfo$$, $metaMap$$) {
  var $result$$16$$ = [];
  if($metaInfo$$ == $JSCompiler_alias_NULL$$) {
    return $result$$16$$
  }
  $goog$array$forEach$$($metaInfo$$.split(";"), function($cmdArray_commandLine$$) {
    $cmdArray_commandLine$$ = $goog$string$trim$$($cmdArray_commandLine$$).split(/\s+/);
    var $commandFunction$$ = $metaMap$$.get($cmdArray_commandLine$$[0], $goog$nullFunction$$);
    if($commandFunction$$ !== $goog$nullFunction$$) {
      for(var $parserState$$ = 0, $conditionStatement$$ = "", $parametersStatement$$ = "", $x$$65$$ = 1;$x$$65$$ < $cmdArray_commandLine$$.length;++$x$$65$$) {
        var $token$$5$$ = $cmdArray_commandLine$$[$x$$65$$];
        if(0 === $parserState$$) {
          if("If" === $token$$5$$) {
            $parserState$$ = 1;
            continue
          }else {
            $parserState$$ = 2
          }
        }
        1 === $parserState$$ && "then" === $token$$5$$ ? $parserState$$ = 2 : 1 === $parserState$$ ? $conditionStatement$$ += $uniform$util$interpretToken$$($token$$5$$) : $parametersStatement$$ += $uniform$util$interpretToken$$($token$$5$$)
      }
      $result$$16$$.push([$commandFunction$$, $conditionStatement$$, $parametersStatement$$])
    }
  });
  return $result$$16$$
}
function $uniform$util$executeElementMetaTags$$($el$$43$$, $metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$, $extraInfo$$) {
  $metaInfo$$1_metaTag$$ = $el$$43$$.getAttribute($metaInfo$$1_metaTag$$);
  $metaInfo$$1_metaTag$$ != $JSCompiler_alias_NULL$$ && ($compiledMetaTags_metaMap$$1$$ = $uniform$util$compileMetaTags$$($metaInfo$$1_metaTag$$, $compiledMetaTags_metaMap$$1$$), $goog$array$forEach$$($compiledMetaTags_metaMap$$1$$, function($compiledMetaTag$$) {
    $compiledMetaTag$$[0]($el$$43$$, $compiledMetaTag$$[1], $compiledMetaTag$$[2], $extraInfo$$)
  }))
}
function $uniform$util$executeFormMetaTags$$($formElement$$, $metaMap$$2$$) {
  for(var $els$$5$$ = $formElement$$.getElementsByTagName("*"), $el$$44$$, $i$$118$$ = 0;$el$$44$$ = $els$$5$$[$i$$118$$];$i$$118$$++) {
    $uniform$util$executeElementMetaTags$$($el$$44$$, "uniform-meta", $metaMap$$2$$, $JSCompiler_alias_VOID$$)
  }
}
;
// Input 57
function $uniform$Meta$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("display", this.$display_$);
  this.$metaMap_$.set("hide", this.$hide_$);
  this.$metaMap_$.set("assign", this.$assign_$)
}
$goog$addSingletonGetter$$($uniform$Meta$$);
$uniform$Meta$$.prototype.$metaMap_$ = $JSCompiler_alias_NULL$$;
$uniform$Meta$$.prototype.$display_$ = function $$uniform$Meta$$$$$display_$$($el$$45$$, $condition$$2$$) {
  eval($condition$$2$$) ? $goog$style$showElement$$($el$$45$$, $JSCompiler_alias_TRUE$$) : $goog$style$showElement$$($el$$45$$, $JSCompiler_alias_FALSE$$)
};
$uniform$Meta$$.prototype.$hide_$ = function $$uniform$Meta$$$$$hide_$$($el$$46$$, $condition$$3$$) {
  eval($condition$$3$$) ? $goog$style$showElement$$($el$$46$$, $JSCompiler_alias_FALSE$$) : $goog$style$showElement$$($el$$46$$, $JSCompiler_alias_TRUE$$)
};
$uniform$Meta$$.prototype.$assign_$ = function $$uniform$Meta$$$$$assign_$$($el$$47$$, $condition$$4$$, $params$$5$$) {
  eval($condition$$4$$) && $goog$dom$forms$setValue$$($el$$47$$, eval($params$$5$$))
};
// Input 58
// Input 59
// Input 60
function $goog$a11y$aria$setState$$($element$$101$$, $state$$1$$, $value$$87$$) {
  $element$$101$$.setAttribute("aria-" + $state$$1$$, $value$$87$$)
}
;
// Input 61
var $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ = "undefined" != typeof DOMTokenList, $goog$dom$classlist$get$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$107$$) {
  return $element$$107$$.classList
} : function($className$$19_element$$108$$) {
  $className$$19_element$$108$$ = $className$$19_element$$108$$.className;
  return $goog$isString$$($className$$19_element$$108$$) && $className$$19_element$$108$$.match(/\S+/g) || []
}, $goog$dom$classlist$contains$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$110$$, $className$$21$$) {
  return $element$$110$$.classList.contains($className$$21$$)
} : function($element$$111$$, $className$$22$$) {
  return $goog$array$contains$$($goog$dom$classlist$get$$($element$$111$$), $className$$22$$)
}, $goog$dom$classlist$add$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$112$$, $className$$23$$) {
  $element$$112$$.classList.add($className$$23$$)
} : function($element$$113$$, $className$$24$$) {
  $goog$dom$classlist$contains$$($element$$113$$, $className$$24$$) || ($element$$113$$.className += 0 < $element$$113$$.className.length ? " " + $className$$24$$ : $className$$24$$)
}, $goog$dom$classlist$remove$$ = $goog$dom$classlist$NATIVE_DOM_TOKEN_LIST_$$ ? function($element$$116$$, $className$$29$$) {
  $element$$116$$.classList.remove($className$$29$$)
} : function($element$$117$$, $className$$30$$) {
  $goog$dom$classlist$contains$$($element$$117$$, $className$$30$$) && ($element$$117$$.className = $goog$array$filter$$($goog$dom$classlist$get$$($element$$117$$), function($c$$1$$) {
    return $c$$1$$ != $className$$30$$
  }).join(" "))
};
// Input 62
function $goog$ui$LabelInput$$($opt_label$$, $opt_domHelper$$3$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$3$$);
  this.$label_$ = $opt_label$$ || ""
}
$goog$inherits$$($goog$ui$LabelInput$$, $goog$ui$Component$$);
$goog$ui$LabelInput$$.prototype.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$;
var $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ = "placeholder" in document.createElement("input");
$JSCompiler_prototypeAlias$$ = $goog$ui$LabelInput$$.prototype;
$JSCompiler_prototypeAlias$$.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  this.$element_$ = this.$getDomHelper$().$createDom$("input", {type:"text"})
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$124$$) {
  $goog$ui$LabelInput$$.$superClass_$.$decorateInternal$.call(this, $element$$124$$);
  this.$label_$ || (this.$label_$ = $element$$124$$.getAttribute("label") || "");
  var $JSCompiler_inline_result$$43$$;
  a: {
    var $doc$$inline_240$$ = $goog$dom$getOwnerDocument$$($element$$124$$);
    try {
      $JSCompiler_inline_result$$43$$ = $doc$$inline_240$$ && $doc$$inline_240$$.activeElement;
      break a
    }catch($e$$inline_241$$) {
    }
    $JSCompiler_inline_result$$43$$ = $JSCompiler_alias_NULL$$
  }
  $JSCompiler_inline_result$$43$$ == $element$$124$$ && (this.$hasFocus_$ = $JSCompiler_alias_TRUE$$, $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$));
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$getElement$().placeholder = this.$label_$ : $goog$a11y$aria$setState$$(this.$getElement$(), "label", this.$label_$)
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$enterDocument$.call(this);
  var $eh$$inline_244$$ = new $goog$events$EventHandler$$(this);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_244$$, this.$getElement$(), "focus", this.$handleFocus_$);
  $JSCompiler_StaticMethods_listen$$($eh$$inline_244$$, this.$getElement$(), "blur", this.$handleBlur_$);
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? this.$eventHandler_$ = $eh$$inline_244$$ : ($goog$userAgent$GECKO$$ && $JSCompiler_StaticMethods_listen$$($eh$$inline_244$$, this.$getElement$(), ["keypress", "keydown", "keyup"], this.$handleEscapeKeys_$), $JSCompiler_StaticMethods_listen$$($eh$$inline_244$$, $goog$dom$getOwnerDocument$$(this.$getElement$()) ? $goog$dom$getOwnerDocument$$(this.$getElement$()).parentWindow || $goog$dom$getOwnerDocument$$(this.$getElement$()).defaultView : window, "load", 
  this.$handleWindowLoad_$), this.$eventHandler_$ = $eh$$inline_244$$, $JSCompiler_StaticMethods_attachEventsToForm_$$(this));
  $JSCompiler_StaticMethods_check_$$(this);
  this.$getElement$().$labelInput_$ = this
};
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$LabelInput$$.$superClass_$.$exitDocument$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$);
  this.$getElement$().$labelInput_$ = $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$) {
  !$JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ && ($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$ && $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form) && ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_attachEventsToForm_$self$$.$eventHandler_$, $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$getElement$().form, "submit", $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$handleFormSubmit_$), $JSCompiler_StaticMethods_attachEventsToForm_$self$$.$formAttached_$ = 
  $JSCompiler_alias_TRUE$$)
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$LabelInput$$.$superClass_$.$disposeInternal$.call(this);
  this.$eventHandler_$ && (this.$eventHandler_$.$dispose$(), this.$eventHandler_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.$LABEL_CLASS_NAME$ = "label-input-label";
$JSCompiler_prototypeAlias$$.$handleFocus_$ = function $$JSCompiler_prototypeAlias$$$$handleFocus_$$() {
  this.$hasFocus_$ = $JSCompiler_alias_TRUE$$;
  $goog$dom$classlist$remove$$(this.$getElement$(), this.$LABEL_CLASS_NAME$);
  if(!$goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ && !$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$inFocusAndSelect_$) {
    var $me$$1$$ = this, $clearValue$$ = function $$clearValue$$$() {
      $me$$1$$.$getElement$() && ($me$$1$$.$getElement$().value = "")
    };
    $goog$userAgent$IE$$ ? $goog$Timer$callOnce$$($clearValue$$, 10) : $clearValue$$()
  }
};
$JSCompiler_prototypeAlias$$.$handleBlur_$ = function $$JSCompiler_prototypeAlias$$$$handleBlur_$$() {
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || ($JSCompiler_StaticMethods_unlisten$$(this.$eventHandler_$, this.$getElement$(), "click", this.$handleFocus_$), this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$);
  this.$hasFocus_$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$handleEscapeKeys_$ = function $$JSCompiler_prototypeAlias$$$$handleEscapeKeys_$$($e$$34$$) {
  27 == $e$$34$$.keyCode && ("keydown" == $e$$34$$.type ? this.$ffKeyRestoreValue_$ = this.$getElement$().value : "keypress" == $e$$34$$.type ? this.$getElement$().value = this.$ffKeyRestoreValue_$ : "keyup" == $e$$34$$.type && (this.$ffKeyRestoreValue_$ = $JSCompiler_alias_NULL$$), $e$$34$$.preventDefault())
};
$JSCompiler_prototypeAlias$$.$handleFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleFormSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = "", $goog$Timer$callOnce$$(this.$handleAfterSubmit_$, 10, this))
};
$JSCompiler_prototypeAlias$$.$handleAfterSubmit_$ = function $$JSCompiler_prototypeAlias$$$$handleAfterSubmit_$$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) || (this.$getElement$().value = this.$label_$)
};
$JSCompiler_prototypeAlias$$.$handleWindowLoad_$ = function $$JSCompiler_prototypeAlias$$$$handleWindowLoad_$$() {
  $JSCompiler_StaticMethods_check_$$(this)
};
function $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_hasChanged$self$$) {
  return!!$JSCompiler_StaticMethods_hasChanged$self$$.$getElement$() && "" != $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value && $JSCompiler_StaticMethods_hasChanged$self$$.$getElement$().value != $JSCompiler_StaticMethods_hasChanged$self$$.$label_$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  this.$getElement$().value = "";
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = "")
};
$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  $JSCompiler_StaticMethods_hasChanged$$(this) && (this.clear(), $JSCompiler_StaticMethods_check_$$(this))
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($s$$22$$) {
  this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ && (this.$ffKeyRestoreValue_$ = $s$$22$$);
  this.$getElement$().value = $s$$22$$;
  $JSCompiler_StaticMethods_check_$$(this)
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$() {
  return this.$ffKeyRestoreValue_$ != $JSCompiler_alias_NULL$$ ? this.$ffKeyRestoreValue_$ : $JSCompiler_StaticMethods_hasChanged$$(this) ? this.$getElement$().value : ""
};
function $JSCompiler_StaticMethods_check_$$($JSCompiler_StaticMethods_check_$self$$) {
  var $el$$50_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$();
  $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ ? $JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder != $JSCompiler_StaticMethods_check_$self$$.$label_$ && ($JSCompiler_StaticMethods_check_$self$$.$getElement$().placeholder = $JSCompiler_StaticMethods_check_$self$$.$label_$) : ($JSCompiler_StaticMethods_attachEventsToForm_$$($JSCompiler_StaticMethods_check_$self$$), $goog$a11y$aria$setState$$($el$$50_labelInputElement$$2$$, "label", $JSCompiler_StaticMethods_check_$self$$.$label_$));
  $JSCompiler_StaticMethods_hasChanged$$($JSCompiler_StaticMethods_check_$self$$) ? ($el$$50_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), $goog$dom$classlist$remove$$($el$$50_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)) : (!$JSCompiler_StaticMethods_check_$self$$.$inFocusAndSelect_$ && !$JSCompiler_StaticMethods_check_$self$$.$hasFocus_$ && ($el$$50_labelInputElement$$2$$ = $JSCompiler_StaticMethods_check_$self$$.$getElement$(), 
  $goog$dom$classlist$add$$($el$$50_labelInputElement$$2$$, $JSCompiler_StaticMethods_check_$self$$.$LABEL_CLASS_NAME$)), $goog$ui$LabelInput$SUPPORTS_PLACEHOLDER_$$ || $goog$Timer$callOnce$$($JSCompiler_StaticMethods_check_$self$$.$restoreLabel_$, 10, $JSCompiler_StaticMethods_check_$self$$))
}
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$2$$) {
  this.$getElement$().disabled = !$enabled$$2$$;
  var $el$$51$$ = this.$getElement$(), $className$$inline_251$$ = this.$LABEL_CLASS_NAME$ + "-disabled";
  !$enabled$$2$$ ? $goog$dom$classlist$add$$($el$$51$$, $className$$inline_251$$) : $goog$dom$classlist$remove$$($el$$51$$, $className$$inline_251$$)
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!this.$getElement$().disabled
};
$JSCompiler_prototypeAlias$$.$restoreLabel_$ = function $$JSCompiler_prototypeAlias$$$$restoreLabel_$$() {
  this.$getElement$() && (!$JSCompiler_StaticMethods_hasChanged$$(this) && !this.$hasFocus_$) && (this.$getElement$().value = this.$label_$)
};
// Input 63
var $goog$events$KeyCodes$MAC_ENTER$$ = 3, $goog$events$KeyCodes$BACKSPACE$$ = 8, $goog$events$KeyCodes$TAB$$ = 9, $goog$events$KeyCodes$NUM_CENTER$$ = 12, $goog$events$KeyCodes$ENTER$$ = 13, $goog$events$KeyCodes$SPACE$$ = 32, $goog$events$KeyCodes$DELETE$$ = 46, $goog$events$KeyCodes$ZERO$$ = 48, $goog$events$KeyCodes$NINE$$ = 57, $goog$events$KeyCodes$E$$ = 69, $goog$events$KeyCodes$NUM_ZERO$$ = 96, $goog$events$KeyCodes$NUM_NINE$$ = 105, $goog$events$KeyCodes$NUM_MINUS$$ = 109, $goog$events$KeyCodes$NUM_PERIOD$$ = 
110, $goog$events$KeyCodes$COMMA$$ = 188, $goog$events$KeyCodes$PERIOD$$ = 190, $goog$events$KeyCodes$$ = {};
function $goog$events$KeyCodes$isTextModifyingKeyEvent$$($e$$38$$) {
  if($e$$38$$.altKey && !$e$$38$$.ctrlKey || $e$$38$$.metaKey || 112 <= $e$$38$$.keyCode && 123 >= $e$$38$$.keyCode) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($e$$38$$.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case $goog$events$KeyCodes$NUM_CENTER$$:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return $JSCompiler_alias_FALSE$$;
    case 0:
      return!$goog$userAgent$GECKO$$;
    default:
      return 166 > $e$$38$$.keyCode || 183 < $e$$38$$.keyCode
  }
}
function $goog$events$KeyCodes$firesKeyPressEvent$$($keyCode$$, $opt_heldKeyCode$$, $opt_shiftKey$$, $opt_ctrlKey$$, $opt_altKey$$) {
  if(!$goog$userAgent$IE$$ && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$isVersion$$("525"))) {
    return $JSCompiler_alias_TRUE$$
  }
  if($goog$userAgent$MAC$$ && $opt_altKey$$) {
    return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
  }
  if($opt_altKey$$ && !$opt_ctrlKey$$ || !$opt_shiftKey$$ && (17 == $opt_heldKeyCode$$ || 18 == $opt_heldKeyCode$$ || $goog$userAgent$MAC$$ && 91 == $opt_heldKeyCode$$)) {
    return $JSCompiler_alias_FALSE$$
  }
  if($goog$userAgent$WEBKIT$$ && $opt_ctrlKey$$ && $opt_shiftKey$$) {
    switch($keyCode$$) {
      case 220:
      ;
      case 219:
      ;
      case 221:
      ;
      case 192:
      ;
      case 186:
      ;
      case 189:
      ;
      case 187:
      ;
      case $goog$events$KeyCodes$COMMA$$:
      ;
      case $goog$events$KeyCodes$PERIOD$$:
      ;
      case 191:
      ;
      case 192:
      ;
      case 222:
        return $JSCompiler_alias_FALSE$$
    }
  }
  if($goog$userAgent$IE$$ && $opt_ctrlKey$$ && $opt_heldKeyCode$$ == $keyCode$$) {
    return $JSCompiler_alias_FALSE$$
  }
  switch($keyCode$$) {
    case $goog$events$KeyCodes$ENTER$$:
      return!($goog$userAgent$IE$$ && $goog$userAgent$IE$$ && 9 <= $goog$userAgent$DOCUMENT_MODE$$);
    case 27:
      return!$goog$userAgent$WEBKIT$$
  }
  return $goog$events$KeyCodes$isCharacterKey$$($keyCode$$)
}
function $goog$events$KeyCodes$isCharacterKey$$($keyCode$$1$$) {
  if($keyCode$$1$$ >= $goog$events$KeyCodes$ZERO$$ && $keyCode$$1$$ <= $goog$events$KeyCodes$NINE$$ || $keyCode$$1$$ >= $goog$events$KeyCodes$NUM_ZERO$$ && 106 >= $keyCode$$1$$ || 65 <= $keyCode$$1$$ && 90 >= $keyCode$$1$$ || $goog$userAgent$WEBKIT$$ && 0 == $keyCode$$1$$) {
    return $JSCompiler_alias_TRUE$$
  }
  switch($keyCode$$1$$) {
    case $goog$events$KeyCodes$SPACE$$:
    ;
    case 63:
    ;
    case 107:
    ;
    case $goog$events$KeyCodes$NUM_MINUS$$:
    ;
    case $goog$events$KeyCodes$NUM_PERIOD$$:
    ;
    case 111:
    ;
    case 186:
    ;
    case 59:
    ;
    case 189:
    ;
    case 187:
    ;
    case 61:
    ;
    case $goog$events$KeyCodes$COMMA$$:
    ;
    case $goog$events$KeyCodes$PERIOD$$:
    ;
    case 191:
    ;
    case 192:
    ;
    case 222:
    ;
    case 219:
    ;
    case 220:
    ;
    case 221:
      return $JSCompiler_alias_TRUE$$;
    default:
      return $JSCompiler_alias_FALSE$$
  }
}
function $goog$events$KeyCodes$normalizeGeckoKeyCode$$($keyCode$$2$$) {
  switch($keyCode$$2$$) {
    case 61:
      return 187;
    case 59:
      return 186;
    case 224:
      return 91;
    case 0:
      return 224;
    default:
      return $keyCode$$2$$
  }
}
;
// Input 64
// Input 65
function $uniform$Validators$$() {
  this.$metaMap_$ = new $goog$structs$Map$$;
  this.$metaMap_$.set("required", this.$validateRequired_$);
  this.$metaMap_$.set("validateMinLength", this.$validateMinLength_$);
  this.$metaMap_$.set("validateEmail", this.$validateEmail_$);
  this.$metaMap_$.set("validateMaxLength", this.$validateMaxLength_$);
  this.$metaMap_$.set("validateMin", this.$validateMin_$);
  this.$metaMap_$.set("validateMax", this.$validateMax_$);
  this.$metaMap_$.set("validateNumber", this.$validateNumber_$);
  this.$metaMap_$.set("validateInteger", this.$validateInteger_$);
  this.$metaMap_$.set("validateAlpha", this.$validateAlpha_$);
  this.$metaMap_$.set("validateAlphaNum", this.$validateAlphaNum_$);
  this.$metaMap_$.set("validatePhrase", this.$validatePhrase_$);
  this.$metaMap_$.set("validateUsername", this.$validateUsername_$)
}
$goog$addSingletonGetter$$($uniform$Validators$$);
$JSCompiler_prototypeAlias$$ = $uniform$Validators$$.prototype;
$JSCompiler_prototypeAlias$$.$metaMap_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$validateRequired_$ = function $$JSCompiler_prototypeAlias$$$$validateRequired_$$($el$$53_elValue$$, $condition$$5$$, $params$$6$$, $caption$$1$$) {
  if(!$condition$$5$$ || eval($condition$$5$$)) {
    $el$$53_elValue$$ = $goog$dom$forms$getValue$$($el$$53_elValue$$), ($el$$53_elValue$$ == $JSCompiler_alias_NULL$$ || $goog$string$isEmpty$$($el$$53_elValue$$)) && $JSCompiler_alias_THROW$$($caption$$1$$ + " is required")
  }
};
$JSCompiler_prototypeAlias$$.$validateMinLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMinLength_$$($el$$54$$, $condition$$6$$, $minLength$$1$$, $caption$$2$$) {
  if(!$condition$$6$$ || eval($condition$$6$$)) {
    $minLength$$1$$ = parseInt($minLength$$1$$, 10), 0 < $minLength$$1$$ && $goog$dom$forms$getValue$$($el$$54$$).length < $minLength$$1$$ && $JSCompiler_alias_THROW$$($caption$$2$$ + (" should be at least " + ($minLength$$1$$ + " characters long")))
  }
};
$JSCompiler_prototypeAlias$$.$validateEmail_$ = function $$JSCompiler_prototypeAlias$$$$validateEmail_$$($el$$55$$, $condition$$7$$, $params$$7$$, $caption$$3$$) {
  (!$condition$$7$$ || eval($condition$$7$$)) && !$goog$dom$forms$getValue$$($el$$55$$).match(/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/) && $JSCompiler_alias_THROW$$($caption$$3$$ + " is not a valid email address")
};
$JSCompiler_prototypeAlias$$.$validateMaxLength_$ = function $$JSCompiler_prototypeAlias$$$$validateMaxLength_$$($el$$56$$, $condition$$8$$, $maxLength$$, $caption$$4$$) {
  if(!$condition$$8$$ || eval($condition$$8$$)) {
    $maxLength$$ = parseInt($maxLength$$, 10), 0 < $maxLength$$ && $goog$dom$forms$getValue$$($el$$56$$).length > $maxLength$$ && $JSCompiler_alias_THROW$$($caption$$4$$ + (" should not be longer than " + ($maxLength$$ + " characters")))
  }
};
$JSCompiler_prototypeAlias$$.$validateMax_$ = function $$JSCompiler_prototypeAlias$$$$validateMax_$$($el$$57$$, $condition$$9$$, $maxValue$$, $caption$$5$$) {
  if(!$condition$$9$$ || eval($condition$$9$$)) {
    $maxValue$$ = parseInt($maxValue$$, 10), parseInt($goog$dom$forms$getValue$$($el$$57$$)) > $maxValue$$ && $JSCompiler_alias_THROW$$($caption$$5$$ + (" should be less than or equal to " + $maxValue$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateMin_$ = function $$JSCompiler_prototypeAlias$$$$validateMin_$$($el$$58_fieldValue$$, $condition$$10$$, $minValue$$, $caption$$6$$) {
  if(!$condition$$10$$ || eval($condition$$10$$)) {
    $minValue$$ = parseInt($minValue$$, 10), $el$$58_fieldValue$$ = parseInt($goog$dom$forms$getValue$$($el$$58_fieldValue$$)), 0 < $el$$58_fieldValue$$ && $el$$58_fieldValue$$ < $minValue$$ && $JSCompiler_alias_THROW$$($caption$$6$$ + (" should be greater than or equal to " + $minValue$$))
  }
};
$JSCompiler_prototypeAlias$$.$validateNumber_$ = function $$JSCompiler_prototypeAlias$$$$validateNumber_$$($el$$59_elValue$$2$$, $condition$$11$$, $params$$8$$, $caption$$7$$) {
  if(!$condition$$11$$ || eval($condition$$11$$)) {
    $el$$59_elValue$$2$$ = $goog$dom$forms$getValue$$($el$$59_elValue$$2$$), !$el$$59_elValue$$2$$.match(/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/) && !$goog$string$isEmpty$$($el$$59_elValue$$2$$) && $JSCompiler_alias_THROW$$($caption$$7$$ + " needs to be a number")
  }
};
$JSCompiler_prototypeAlias$$.$validateInteger_$ = function $$JSCompiler_prototypeAlias$$$$validateInteger_$$($el$$60_elValue$$3$$, $condition$$12$$, $params$$9$$, $caption$$8$$) {
  if(!$condition$$12$$ || eval($condition$$12$$)) {
    $el$$60_elValue$$3$$ = $goog$dom$forms$getValue$$($el$$60_elValue$$3$$), /[^0-9]/.test($el$$60_elValue$$3$$) && $JSCompiler_alias_THROW$$($caption$$8$$ + " needs to be a whole number")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlpha_$ = function $$JSCompiler_prototypeAlias$$$$validateAlpha_$$($el$$61_elValue$$4$$, $condition$$13$$, $params$$10$$, $caption$$9$$) {
  if(!$condition$$13$$ || eval($condition$$13$$)) {
    $el$$61_elValue$$4$$ = $goog$dom$forms$getValue$$($el$$61_elValue$$4$$), /[^a-zA-Z]/.test($el$$61_elValue$$4$$) && $JSCompiler_alias_THROW$$($caption$$9$$ + " should contain only letters (without special characters or numbers)")
  }
};
$JSCompiler_prototypeAlias$$.$validateAlphaNum_$ = function $$JSCompiler_prototypeAlias$$$$validateAlphaNum_$$($el$$62_elValue$$5$$, $condition$$14$$, $params$$11$$, $caption$$10$$) {
  if(!$condition$$14$$ || eval($condition$$14$$)) {
    $el$$62_elValue$$5$$ = $goog$dom$forms$getValue$$($el$$62_elValue$$5$$), /[^a-zA-Z0-9]/.test($el$$62_elValue$$5$$) && $JSCompiler_alias_THROW$$($caption$$10$$ + " should contain only numbers and letters (without special characters)")
  }
};
$JSCompiler_prototypeAlias$$.$validatePhrase_$ = function $$JSCompiler_prototypeAlias$$$$validatePhrase_$$($el$$63_elValue$$6$$, $condition$$15$$, $params$$12$$, $caption$$11$$) {
  if(!$condition$$15$$ || eval($condition$$15$$)) {
    $el$$63_elValue$$6$$ = $goog$dom$forms$getValue$$($el$$63_elValue$$6$$), !$el$$63_elValue$$6$$.match(/^[\w\d\.\-_\(\)\*'# :,]+$/i) && !$goog$string$isEmpty$$($el$$63_elValue$$6$$) && $JSCompiler_alias_THROW$$($caption$$11$$ + " should contain only alphabetic characters, numbers, spaces, and the following: . , - _ () * # :")
  }
};
$JSCompiler_prototypeAlias$$.$validateUsername_$ = function $$JSCompiler_prototypeAlias$$$$validateUsername_$$($el$$64_elValue$$7$$, $condition$$16$$, $params$$13$$, $caption$$12$$) {
  if(!$condition$$16$$ || eval($condition$$16$$)) {
    $el$$64_elValue$$7$$ = $goog$dom$forms$getValue$$($el$$64_elValue$$7$$), !$el$$64_elValue$$7$$.match(/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){1,18}[a-zA-Z0-9]$/) && !$goog$string$isEmpty$$($el$$64_elValue$$7$$) && $JSCompiler_alias_THROW$$($caption$$12$$ + " should contain only alphabetic characters, numbers, and the following characters: . _ -")
  }
};
// Input 66
function $goog$ui$registry$setDecoratorByClassName$$($className$$37$$, $decoratorFn$$) {
  $className$$37$$ || $JSCompiler_alias_THROW$$(Error("Invalid class name " + $className$$37$$));
  $goog$isFunction$$($decoratorFn$$) || $JSCompiler_alias_THROW$$(Error("Invalid decorator function " + $decoratorFn$$))
}
var $goog$ui$registry$defaultRenderers_$$ = {};
// Input 67
function $goog$events$KeyHandler$$($opt_element$$11$$, $opt_capture$$8$$) {
  $goog$Disposable$$.call(this);
  $opt_element$$11$$ && $JSCompiler_StaticMethods_attach$$(this, $opt_element$$11$$, $opt_capture$$8$$)
}
$goog$inherits$$($goog$events$KeyHandler$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$element_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyPressKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyDownKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$keyUpKey_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$lastKey_$ = -1;
$JSCompiler_prototypeAlias$$.$keyCode_$ = -1;
$JSCompiler_prototypeAlias$$.$altKey_$ = $JSCompiler_alias_FALSE$$;
var $goog$events$KeyHandler$safariKey_$$ = {3:$goog$events$KeyCodes$ENTER$$, 12:144, 63232:38, 63233:40, 63234:37, 63235:39, 63236:112, 63237:113, 63238:114, 63239:115, 63240:116, 63241:117, 63242:118, 63243:119, 63244:120, 63245:121, 63246:122, 63247:123, 63248:44, 63272:$goog$events$KeyCodes$DELETE$$, 63273:36, 63275:35, 63276:33, 63277:34, 63289:144, 63302:45}, $goog$events$KeyHandler$keyIdentifier_$$ = {Up:38, Down:40, Left:37, Right:39, Enter:$goog$events$KeyCodes$ENTER$$, F1:112, F2:113, F3:114, 
F4:115, F5:116, F6:117, F7:118, F8:119, F9:120, F10:121, F11:122, F12:123, "U+007F":$goog$events$KeyCodes$DELETE$$, Home:36, End:35, PageUp:33, PageDown:34, Insert:45}, $goog$events$KeyHandler$USES_KEYDOWN_$$ = $goog$userAgent$IE$$ || $goog$userAgent$WEBKIT$$ && $goog$userAgent$isVersion$$("525"), $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ = $goog$userAgent$MAC$$ && $goog$userAgent$GECKO$$;
$JSCompiler_prototypeAlias$$ = $goog$events$KeyHandler$$.prototype;
$JSCompiler_prototypeAlias$$.$handleKeyDown_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyDown_$$($e$$41$$) {
  if($goog$userAgent$WEBKIT$$ && (17 == this.$lastKey_$ && !$e$$41$$.ctrlKey || 18 == this.$lastKey_$ && !$e$$41$$.altKey || $goog$userAgent$MAC$$ && 91 == this.$lastKey_$ && !$e$$41$$.metaKey)) {
    this.$keyCode_$ = this.$lastKey_$ = -1
  }
  -1 == this.$lastKey_$ && ($e$$41$$.ctrlKey && 17 != $e$$41$$.keyCode ? this.$lastKey_$ = 17 : $e$$41$$.altKey && 18 != $e$$41$$.keyCode ? this.$lastKey_$ = 18 : $e$$41$$.metaKey && 91 != $e$$41$$.keyCode && (this.$lastKey_$ = 91));
  $goog$events$KeyHandler$USES_KEYDOWN_$$ && !$goog$events$KeyCodes$firesKeyPressEvent$$($e$$41$$.keyCode, this.$lastKey_$, $e$$41$$.shiftKey, $e$$41$$.ctrlKey, $e$$41$$.altKey) ? this.handleEvent($e$$41$$) : (this.$keyCode_$ = $goog$userAgent$GECKO$$ ? $goog$events$KeyCodes$normalizeGeckoKeyCode$$($e$$41$$.keyCode) : $e$$41$$.keyCode, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && (this.$altKey_$ = $e$$41$$.altKey))
};
$JSCompiler_prototypeAlias$$.$handleKeyup_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyup_$$($e$$42$$) {
  this.$keyCode_$ = this.$lastKey_$ = -1;
  this.$altKey_$ = $e$$42$$.altKey
};
$JSCompiler_prototypeAlias$$.handleEvent = function $$JSCompiler_prototypeAlias$$$handleEvent$($e$$43_repeat$$) {
  var $be$$3_event$$3$$ = $e$$43_repeat$$.$event_$, $keyCode$$3$$, $charCode$$, $altKey$$2$$ = $be$$3_event$$3$$.altKey;
  $goog$userAgent$IE$$ && "keypress" == $e$$43_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = $keyCode$$3$$ != $goog$events$KeyCodes$ENTER$$ && 27 != $keyCode$$3$$ ? $be$$3_event$$3$$.keyCode : 0) : $goog$userAgent$WEBKIT$$ && "keypress" == $e$$43_repeat$$.type ? ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = 0 <= $be$$3_event$$3$$.charCode && 63232 > $be$$3_event$$3$$.charCode && $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$3_event$$3$$.charCode : 0) : $goog$userAgent$OPERA$$ ? 
  ($keyCode$$3$$ = this.$keyCode_$, $charCode$$ = $goog$events$KeyCodes$isCharacterKey$$($keyCode$$3$$) ? $be$$3_event$$3$$.keyCode : 0) : ($keyCode$$3$$ = $be$$3_event$$3$$.keyCode || this.$keyCode_$, $charCode$$ = $be$$3_event$$3$$.charCode || 0, $goog$events$KeyHandler$SAVE_ALT_FOR_KEYPRESS_$$ && ($altKey$$2$$ = this.$altKey_$), $goog$userAgent$MAC$$ && (63 == $charCode$$ && 224 == $keyCode$$3$$) && ($keyCode$$3$$ = 191));
  var $key$$71$$ = $keyCode$$3$$, $keyIdentifier$$ = $be$$3_event$$3$$.keyIdentifier;
  $keyCode$$3$$ ? 63232 <= $keyCode$$3$$ && $keyCode$$3$$ in $goog$events$KeyHandler$safariKey_$$ ? $key$$71$$ = $goog$events$KeyHandler$safariKey_$$[$keyCode$$3$$] : 25 == $keyCode$$3$$ && $e$$43_repeat$$.shiftKey && ($key$$71$$ = 9) : $keyIdentifier$$ && $keyIdentifier$$ in $goog$events$KeyHandler$keyIdentifier_$$ && ($key$$71$$ = $goog$events$KeyHandler$keyIdentifier_$$[$keyIdentifier$$]);
  $e$$43_repeat$$ = $key$$71$$ == this.$lastKey_$;
  this.$lastKey_$ = $key$$71$$;
  $be$$3_event$$3$$ = new $goog$events$KeyEvent$$($key$$71$$, $charCode$$, $e$$43_repeat$$, $be$$3_event$$3$$);
  $be$$3_event$$3$$.altKey = $altKey$$2$$;
  this.dispatchEvent($be$$3_event$$3$$)
};
$JSCompiler_prototypeAlias$$.$getElement$ = $JSCompiler_get$$("$element_$");
function $JSCompiler_StaticMethods_attach$$($JSCompiler_StaticMethods_attach$self$$, $element$$127$$, $opt_capture$$9$$) {
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ && $JSCompiler_StaticMethods_attach$self$$.detach();
  $JSCompiler_StaticMethods_attach$self$$.$element_$ = $element$$127$$;
  $JSCompiler_StaticMethods_attach$self$$.$keyPressKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keypress", $JSCompiler_StaticMethods_attach$self$$, $opt_capture$$9$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyDownKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keydown", $JSCompiler_StaticMethods_attach$self$$.$handleKeyDown_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$);
  $JSCompiler_StaticMethods_attach$self$$.$keyUpKey_$ = $goog$events$listen$$($JSCompiler_StaticMethods_attach$self$$.$element_$, "keyup", $JSCompiler_StaticMethods_attach$self$$.$handleKeyup_$, $opt_capture$$9$$, $JSCompiler_StaticMethods_attach$self$$)
}
$JSCompiler_prototypeAlias$$.detach = function $$JSCompiler_prototypeAlias$$$detach$() {
  this.$keyPressKey_$ && ($goog$events$unlistenByKey$$(this.$keyPressKey_$), $goog$events$unlistenByKey$$(this.$keyDownKey_$), $goog$events$unlistenByKey$$(this.$keyUpKey_$), this.$keyUpKey_$ = this.$keyDownKey_$ = this.$keyPressKey_$ = $JSCompiler_alias_NULL$$);
  this.$element_$ = $JSCompiler_alias_NULL$$;
  this.$keyCode_$ = this.$lastKey_$ = -1
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$events$KeyHandler$$.$superClass_$.$disposeInternal$.call(this);
  this.detach()
};
function $goog$events$KeyEvent$$($keyCode$$4$$, $charCode$$1$$, $repeat$$1$$, $browserEvent$$) {
  $browserEvent$$ && this.init($browserEvent$$, $JSCompiler_alias_VOID$$);
  this.type = "key";
  this.keyCode = $keyCode$$4$$;
  this.charCode = $charCode$$1$$;
  this.repeat = $repeat$$1$$
}
$goog$inherits$$($goog$events$KeyEvent$$, $goog$events$BrowserEvent$$);
// Input 68
function $goog$debug$getStacktrace$$($opt_fn$$8$$) {
  return $goog$debug$getStacktraceHelper_$$($opt_fn$$8$$ || arguments.callee.caller, [])
}
function $goog$debug$getStacktraceHelper_$$($fn$$8$$, $visited$$) {
  var $sb$$5$$ = [];
  if($goog$array$contains$$($visited$$, $fn$$8$$)) {
    $sb$$5$$.push("[...circular reference...]")
  }else {
    if($fn$$8$$ && 50 > $visited$$.length) {
      $sb$$5$$.push($goog$debug$getFunctionName$$($fn$$8$$) + "(");
      for(var $args$$12$$ = $fn$$8$$.arguments, $i$$121$$ = 0;$i$$121$$ < $args$$12$$.length;$i$$121$$++) {
        0 < $i$$121$$ && $sb$$5$$.push(", ");
        var $arg$$6_argDesc$$;
        $arg$$6_argDesc$$ = $args$$12$$[$i$$121$$];
        switch(typeof $arg$$6_argDesc$$) {
          case "object":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            $arg$$6_argDesc$$ = String($arg$$6_argDesc$$);
            break;
          case "boolean":
            $arg$$6_argDesc$$ = $arg$$6_argDesc$$ ? "true" : "false";
            break;
          case "function":
            $arg$$6_argDesc$$ = ($arg$$6_argDesc$$ = $goog$debug$getFunctionName$$($arg$$6_argDesc$$)) ? $arg$$6_argDesc$$ : "[fn]";
            break;
          default:
            $arg$$6_argDesc$$ = typeof $arg$$6_argDesc$$
        }
        40 < $arg$$6_argDesc$$.length && ($arg$$6_argDesc$$ = $arg$$6_argDesc$$.substr(0, 40) + "...");
        $sb$$5$$.push($arg$$6_argDesc$$)
      }
      $visited$$.push($fn$$8$$);
      $sb$$5$$.push(")\n");
      try {
        $sb$$5$$.push($goog$debug$getStacktraceHelper_$$($fn$$8$$.caller, $visited$$))
      }catch($e$$50$$) {
        $sb$$5$$.push("[exception trying to get caller]\n")
      }
    }else {
      $fn$$8$$ ? $sb$$5$$.push("[...long stack...]") : $sb$$5$$.push("[end]")
    }
  }
  return $sb$$5$$.join("")
}
function $goog$debug$getFunctionName$$($fn$$9_functionSource$$) {
  if($goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]) {
    return $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]
  }
  $fn$$9_functionSource$$ = String($fn$$9_functionSource$$);
  if(!$goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]) {
    var $matches$$1$$ = /function ([^\(]+)/.exec($fn$$9_functionSource$$);
    $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$] = $matches$$1$$ ? $matches$$1$$[1] : "[Anonymous]"
  }
  return $goog$debug$fnNameCache_$$[$fn$$9_functionSource$$]
}
var $goog$debug$fnNameCache_$$ = {};
// Input 69
function $goog$debug$LogRecord$$($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$) {
  this.reset($level$$7$$, $msg$$, $loggerName$$, $opt_time$$, $opt_sequenceNumber$$)
}
$goog$debug$LogRecord$$.prototype.$sequenceNumber_$ = 0;
$goog$debug$LogRecord$$.prototype.$exception_$ = $JSCompiler_alias_NULL$$;
$goog$debug$LogRecord$$.prototype.$exceptionText_$ = $JSCompiler_alias_NULL$$;
var $goog$debug$LogRecord$nextSequenceNumber_$$ = 0;
$goog$debug$LogRecord$$.prototype.reset = function $$goog$debug$LogRecord$$$$reset$($level$$8$$, $msg$$1$$, $loggerName$$1$$, $opt_time$$1$$, $opt_sequenceNumber$$1$$) {
  this.$sequenceNumber_$ = "number" == typeof $opt_sequenceNumber$$1$$ ? $opt_sequenceNumber$$1$$ : $goog$debug$LogRecord$nextSequenceNumber_$$++;
  this.$time_$ = $opt_time$$1$$ || $goog$now$$();
  this.$level_$ = $level$$8$$;
  this.$msg_$ = $msg$$1$$;
  this.$loggerName_$ = $loggerName$$1$$;
  delete this.$exception_$;
  delete this.$exceptionText_$
};
$goog$debug$LogRecord$$.prototype.$setLevel$ = $JSCompiler_set$$("$level_$");
// Input 70
// Input 71
function $goog$debug$Logger$$($name$$73$$) {
  this.$name_$ = $name$$73$$
}
$goog$debug$Logger$$.prototype.$parent_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$level_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$children_$ = $JSCompiler_alias_NULL$$;
$goog$debug$Logger$$.prototype.$handlers_$ = $JSCompiler_alias_NULL$$;
function $goog$debug$Logger$Level$$($name$$74$$, $value$$88$$) {
  this.name = $name$$74$$;
  this.value = $value$$88$$
}
$goog$debug$Logger$Level$$.prototype.toString = $JSCompiler_get$$("name");
var $goog$debug$Logger$Level$SEVERE$$ = new $goog$debug$Logger$Level$$("SEVERE", 1E3), $goog$debug$Logger$Level$INFO$$ = new $goog$debug$Logger$Level$$("INFO", 800), $goog$debug$Logger$Level$CONFIG$$ = new $goog$debug$Logger$Level$$("CONFIG", 700);
$JSCompiler_prototypeAlias$$ = $goog$debug$Logger$$.prototype;
$JSCompiler_prototypeAlias$$.getName = $JSCompiler_get$$("$name_$");
$JSCompiler_prototypeAlias$$.getParent = $JSCompiler_get$$("$parent_$");
$JSCompiler_prototypeAlias$$.$getChildren$ = function $$JSCompiler_prototypeAlias$$$$getChildren$$() {
  this.$children_$ || (this.$children_$ = {});
  return this.$children_$
};
$JSCompiler_prototypeAlias$$.$setLevel$ = $JSCompiler_set$$("$level_$");
function $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$) {
  return $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$level_$ : $JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$ ? $JSCompiler_StaticMethods_getEffectiveLevel$$($JSCompiler_StaticMethods_getEffectiveLevel$self$$.$parent_$) : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.log = function $$JSCompiler_prototypeAlias$$$log$($level$$15_logRecord$$inline_261$$, $msg$$5_msg$$inline_792_target$$inline_262$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_794_opt_exception$$) {
  if($level$$15_logRecord$$inline_261$$.value >= $JSCompiler_StaticMethods_getEffectiveLevel$$(this).value) {
    $level$$15_logRecord$$inline_261$$ = this.$getLogRecord$($level$$15_logRecord$$inline_261$$, $msg$$5_msg$$inline_792_target$$inline_262$$, $JSCompiler_StaticMethods_callPublish_$self$$inline_794_opt_exception$$);
    $msg$$5_msg$$inline_792_target$$inline_262$$ = "log:" + $level$$15_logRecord$$inline_261$$.$msg_$;
    $goog$global$$.console && ($goog$global$$.console.timeStamp ? $goog$global$$.console.timeStamp($msg$$5_msg$$inline_792_target$$inline_262$$) : $goog$global$$.console.markTimeline && $goog$global$$.console.markTimeline($msg$$5_msg$$inline_792_target$$inline_262$$));
    $goog$global$$.msWriteProfilerMark && $goog$global$$.msWriteProfilerMark($msg$$5_msg$$inline_792_target$$inline_262$$);
    for($msg$$5_msg$$inline_792_target$$inline_262$$ = this;$msg$$5_msg$$inline_792_target$$inline_262$$;) {
      $JSCompiler_StaticMethods_callPublish_$self$$inline_794_opt_exception$$ = $msg$$5_msg$$inline_792_target$$inline_262$$;
      var $logRecord$$inline_795$$ = $level$$15_logRecord$$inline_261$$;
      if($JSCompiler_StaticMethods_callPublish_$self$$inline_794_opt_exception$$.$handlers_$) {
        for(var $i$$inline_796$$ = 0, $handler$$inline_797$$ = $JSCompiler_alias_VOID$$;$handler$$inline_797$$ = $JSCompiler_StaticMethods_callPublish_$self$$inline_794_opt_exception$$.$handlers_$[$i$$inline_796$$];$i$$inline_796$$++) {
          $handler$$inline_797$$($logRecord$$inline_795$$)
        }
      }
      $msg$$5_msg$$inline_792_target$$inline_262$$ = $msg$$5_msg$$inline_792_target$$inline_262$$.getParent()
    }
  }
};
$JSCompiler_prototypeAlias$$.$getLogRecord$ = function $$JSCompiler_prototypeAlias$$$$getLogRecord$$($level$$16$$, $msg$$6$$, $opt_exception$$1$$) {
  var $logRecord$$ = new $goog$debug$LogRecord$$($level$$16$$, String($msg$$6$$), this.$name_$);
  if($opt_exception$$1$$) {
    $logRecord$$.$exception_$ = $opt_exception$$1$$;
    var $JSCompiler_inline_result$$46$$;
    var $opt_fn$$inline_276$$ = arguments.callee.caller;
    try {
      var $e$$inline_277$$;
      var $href$$inline_800$$ = $goog$getObjectByName$$("window.location.href");
      if($goog$isString$$($opt_exception$$1$$)) {
        $e$$inline_277$$ = {message:$opt_exception$$1$$, name:"Unknown error", lineNumber:"Not available", fileName:$href$$inline_800$$, stack:"Not available"}
      }else {
        var $lineNumber$$inline_801$$, $fileName$$inline_802$$, $threwError$$inline_803$$ = $JSCompiler_alias_FALSE$$;
        try {
          $lineNumber$$inline_801$$ = $opt_exception$$1$$.lineNumber || $opt_exception$$1$$.$line$ || "Not available"
        }catch($e$$inline_804$$) {
          $lineNumber$$inline_801$$ = "Not available", $threwError$$inline_803$$ = $JSCompiler_alias_TRUE$$
        }
        try {
          $fileName$$inline_802$$ = $opt_exception$$1$$.fileName || $opt_exception$$1$$.filename || $opt_exception$$1$$.sourceURL || $goog$global$$.$googDebugFname || $href$$inline_800$$
        }catch($e$$inline_805$$) {
          $fileName$$inline_802$$ = "Not available", $threwError$$inline_803$$ = $JSCompiler_alias_TRUE$$
        }
        $e$$inline_277$$ = $threwError$$inline_803$$ || !$opt_exception$$1$$.lineNumber || !$opt_exception$$1$$.fileName || !$opt_exception$$1$$.stack ? {message:$opt_exception$$1$$.message, name:$opt_exception$$1$$.name, lineNumber:$lineNumber$$inline_801$$, fileName:$fileName$$inline_802$$, stack:$opt_exception$$1$$.stack || "Not available"} : $opt_exception$$1$$
      }
      $JSCompiler_inline_result$$46$$ = "Message: " + $goog$string$htmlEscape$$($e$$inline_277$$.message) + '\nUrl: <a href="view-source:' + $e$$inline_277$$.fileName + '" target="_new">' + $e$$inline_277$$.fileName + "</a>\nLine: " + $e$$inline_277$$.lineNumber + "\n\nBrowser stack:\n" + $goog$string$htmlEscape$$($e$$inline_277$$.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + $goog$string$htmlEscape$$($goog$debug$getStacktrace$$($opt_fn$$inline_276$$) + "-> ")
    }catch($e2$$inline_278$$) {
      $JSCompiler_inline_result$$46$$ = "Exception trying to expose exception! You win, we lose. " + $e2$$inline_278$$
    }
    $logRecord$$.$exceptionText_$ = $JSCompiler_inline_result$$46$$
  }
  return $logRecord$$
};
$JSCompiler_prototypeAlias$$.info = function $$JSCompiler_prototypeAlias$$$info$($msg$$10$$, $opt_exception$$5$$) {
  this.log($goog$debug$Logger$Level$INFO$$, $msg$$10$$, $opt_exception$$5$$)
};
var $goog$debug$LogManager$loggers_$$ = {}, $goog$debug$LogManager$rootLogger_$$ = $JSCompiler_alias_NULL$$;
function $goog$debug$LogManager$getLogger$$($name$$78$$) {
  $goog$debug$LogManager$rootLogger_$$ || ($goog$debug$LogManager$rootLogger_$$ = new $goog$debug$Logger$$(""), $goog$debug$LogManager$loggers_$$[""] = $goog$debug$LogManager$rootLogger_$$, $goog$debug$LogManager$rootLogger_$$.$setLevel$($goog$debug$Logger$Level$CONFIG$$));
  var $JSCompiler_temp$$37_logger$$inline_285$$;
  if(!($JSCompiler_temp$$37_logger$$inline_285$$ = $goog$debug$LogManager$loggers_$$[$name$$78$$])) {
    $JSCompiler_temp$$37_logger$$inline_285$$ = new $goog$debug$Logger$$($name$$78$$);
    var $lastDotIndex$$inline_286_parentLogger$$inline_288$$ = $name$$78$$.lastIndexOf("."), $leafName$$inline_287$$ = $name$$78$$.substr($lastDotIndex$$inline_286_parentLogger$$inline_288$$ + 1), $lastDotIndex$$inline_286_parentLogger$$inline_288$$ = $goog$debug$LogManager$getLogger$$($name$$78$$.substr(0, $lastDotIndex$$inline_286_parentLogger$$inline_288$$));
    $lastDotIndex$$inline_286_parentLogger$$inline_288$$.$getChildren$()[$leafName$$inline_287$$] = $JSCompiler_temp$$37_logger$$inline_285$$;
    $JSCompiler_temp$$37_logger$$inline_285$$.$parent_$ = $lastDotIndex$$inline_286_parentLogger$$inline_288$$;
    $goog$debug$LogManager$loggers_$$[$name$$78$$] = $JSCompiler_temp$$37_logger$$inline_285$$
  }
  return $JSCompiler_temp$$37_logger$$inline_285$$
}
;
// Input 72
function $uniform$Uniform$$($opt_model$$, $opt_domHelper$$4$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$4$$);
  var $model$$ = $opt_model$$ || {}, $controlModel$$ = {};
  $controlModel$$.action = $goog$object$get$$($model$$, "action", ".");
  $controlModel$$.accept = $goog$object$get$$($model$$, "accept", $JSCompiler_alias_NULL$$);
  $controlModel$$.acceptCharset = $goog$object$get$$($model$$, "acceptCharset", $JSCompiler_alias_NULL$$);
  $controlModel$$.enctype = $goog$object$get$$($model$$, "enctype", $JSCompiler_alias_NULL$$);
  $controlModel$$.method = $goog$object$get$$($model$$, "method", $JSCompiler_alias_NULL$$);
  $controlModel$$.name = $goog$object$get$$($model$$, "name", $JSCompiler_alias_NULL$$);
  $controlModel$$.target = $goog$object$get$$($model$$, "target", $JSCompiler_alias_NULL$$);
  this.$model_$ = $controlModel$$
}
$goog$inherits$$($uniform$Uniform$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $uniform$Uniform$$.prototype;
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("uniform.Uniform");
$JSCompiler_prototypeAlias$$.getName = function $$JSCompiler_prototypeAlias$$$getName$() {
  return this.$model_$.name
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("uniForm");
$JSCompiler_prototypeAlias$$.$initialFormValue_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $dom$$3_topEl$$ = this.$getDomHelper$(), $formAttributes$$ = {};
  $formAttributes$$.action = this.$model_$.action;
  this.$model_$.accept && ($formAttributes$$.accept = this.$model_$.accept);
  this.$model_$.acceptCharset && ($formAttributes$$["accept-charset"] = this.$model_$.acceptCharset);
  this.$model_$.enctype && ($formAttributes$$.enctype = this.$model_$.enctype);
  this.$model_$.method && ($formAttributes$$.method = this.$model_$.method);
  this.getName() && ($formAttributes$$.name = this.getName());
  this.$model_$.target && ($formAttributes$$.target = this.$model_$.target);
  $dom$$3_topEl$$ = $dom$$3_topEl$$.$createDom$("form", $formAttributes$$, this.$content_$);
  $goog$dom$classes$add$$($dom$$3_topEl$$, this.$getCssClass$());
  this.$element_$ = $dom$$3_topEl$$;
  this.$decorateInternal$($dom$$3_topEl$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$128$$) {
  $uniform$Uniform$$.$superClass_$.$decorateInternal$.call(this, $element$$128$$);
  this.$getDomHelper$();
  this.$model_$.action = $element$$128$$.getAttribute("action");
  this.$model_$.accept = $element$$128$$.getAttribute("accept");
  this.$model_$.acceptCharset = $element$$128$$.getAttribute("accept-charset");
  this.$model_$.enctype = $element$$128$$.getAttribute("enctype");
  this.$model_$.method = $element$$128$$.getAttribute("method");
  this.$model_$.name = $element$$128$$.getAttribute("name");
  this.$model_$.target = $element$$128$$.getAttribute("target");
  $goog$dom$classes$add$$($element$$128$$, this.$getCssClass$());
  for(var $els$$6$$ = this.$getElement$().elements, $el$$65$$, $i$$127$$ = 0;$el$$65$$ = $els$$6$$[$i$$127$$];$i$$127$$++) {
    if("INPUT" === $el$$65$$.tagName) {
      var $labelInput$$ = new $goog$ui$LabelInput$$, $child$$inline_815$$ = $labelInput$$, $index$$inline_816$$ = this.$children_$ ? this.$children_$.length : 0;
      $child$$inline_815$$.$inDocument_$ && !this.$inDocument_$ && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
      (0 > $index$$inline_816$$ || $index$$inline_816$$ > (this.$children_$ ? this.$children_$.length : 0)) && $JSCompiler_alias_THROW$$(Error("Child component index out of bounds"));
      if(!this.$childIndex_$ || !this.$children_$) {
        this.$childIndex_$ = {}, this.$children_$ = []
      }
      if($child$$inline_815$$.getParent() == this) {
        var $contentElement$$inline_819_key$$inline_818$$ = $JSCompiler_StaticMethods_getId$$($child$$inline_815$$);
        this.$childIndex_$[$contentElement$$inline_819_key$$inline_818$$] = $child$$inline_815$$;
        $goog$array$remove$$(this.$children_$, $child$$inline_815$$)
      }else {
        $goog$object$add$$(this.$childIndex_$, $JSCompiler_StaticMethods_getId$$($child$$inline_815$$), $child$$inline_815$$)
      }
      $JSCompiler_StaticMethods_setParent$$($child$$inline_815$$, this);
      $goog$array$splice$$(this.$children_$, $index$$inline_816$$, 0, $child$$inline_815$$);
      $child$$inline_815$$.$inDocument_$ && this.$inDocument_$ && $child$$inline_815$$.getParent() == this ? ($contentElement$$inline_819_key$$inline_818$$ = this.$getContentElement$(), $contentElement$$inline_819_key$$inline_818$$.insertBefore($child$$inline_815$$.$getElement$(), $contentElement$$inline_819_key$$inline_818$$.childNodes[$index$$inline_816$$] || $JSCompiler_alias_NULL$$)) : this.$inDocument_$ && (!$child$$inline_815$$.$inDocument_$ && $child$$inline_815$$.$element_$ && $child$$inline_815$$.$element_$.parentNode && 
      1 == $child$$inline_815$$.$element_$.parentNode.nodeType) && $child$$inline_815$$.$enterDocument$();
      $labelInput$$.$decorate$($el$$65$$)
    }
  }
  return $element$$128$$
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $uniform$Uniform$$.$superClass_$.$enterDocument$.call(this);
  this.$initialFormValue_$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  var $handler$$46$$ = this.$getHandler$();
  $goog$array$contains$$($goog$dom$classes$get$$(this.$getElement$()), "askOnLeave") && $JSCompiler_StaticMethods_listen$$($handler$$46$$, window, "beforeunload", this.$onWindowBeforeUnload_$);
  $JSCompiler_StaticMethods_listen$$($handler$$46$$, this.$getElement$(), "submit", this.$onFormSubmit_$);
  for(var $els$$7$$ = this.$getElement$().elements, $el$$66$$, $i$$128$$ = 0;$el$$66$$ = $els$$7$$[$i$$128$$];$i$$128$$++) {
    $el$$66$$.disabled || $el$$66$$.tagName.toLowerCase() === "INPUT".$FIELDSET$ || ($JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$66$$, "focus", this.$onFormElementFocus_$), $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$66$$, "blur", this.$onFormElementBlur_$), $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$66$$, "click", this.$onFormElementClick_$), "SELECT" === $el$$66$$.tagName && $JSCompiler_StaticMethods_listen$$($handler$$46$$, $el$$66$$, "change", this.$onFormElementSelect_$), 
    "INPUT" === $el$$66$$.tagName && (ih = new $goog$events$KeyHandler$$, $JSCompiler_StaticMethods_attach$$(ih, $el$$66$$), $JSCompiler_StaticMethods_listen$$($handler$$46$$, ih, "key", this.$handleKeyEvent_$)))
  }
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_331$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_331$$.$metaMap_$)
  }catch($metaError$$) {
    this.$logger_$.info($metaError$$)
  }
};
function $JSCompiler_StaticMethods_processFieldEvent_$$($JSCompiler_StaticMethods_processFieldEvent_$self$$, $event$$4$$, $fieldElement$$) {
  var $controlHolderEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($fieldElement$$, $JSCompiler_alias_NULL$$, "ctrlHolder");
  if($controlHolderEl$$ != $JSCompiler_alias_NULL$$) {
    switch($event$$4$$) {
      case 0:
        $goog$dom$classes$add$$($controlHolderEl$$, "focused");
        $goog$dom$classes$remove$$($controlHolderEl$$, "error");
        $goog$dom$classes$remove$$($controlHolderEl$$, "valid");
        break;
      case 1:
        $goog$dom$classes$remove$$($controlHolderEl$$, "focused");
        break;
      case 2:
        $goog$dom$classes$add$$($controlHolderEl$$, "valid");
        $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_validated", $fieldElement$$));
        break;
      case 3:
        $goog$dom$classes$add$$($controlHolderEl$$, "error"), $JSCompiler_StaticMethods_processFieldEvent_$self$$.dispatchEvent(new $goog$events$Event$$("field_invalidated", $fieldElement$$))
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleKeyEvent_$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent_$$($e$$51$$) {
  27 === $e$$51$$.keyCode ? $e$$51$$.preventDefault() : $e$$51$$.keyCode === $goog$events$KeyCodes$ENTER$$ || $e$$51$$.keyCode === $goog$events$KeyCodes$$.$NUMPAD_ENTER$ || $uniform$InputFilters$$.$getInstance$().filter($e$$51$$)
};
$JSCompiler_prototypeAlias$$.$onFormElementFocus_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementFocus_$$($e$$52$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 0, $e$$52$$.target)
};
$JSCompiler_prototypeAlias$$.$onFormElementClick_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementClick_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_334$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_334$$.$metaMap_$)
  }catch($metaError$$1$$) {
    this.$logger_$.info($metaError$$1$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementSelect_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementSelect_$$() {
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_337$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_337$$.$metaMap_$)
  }catch($metaError$$2$$) {
    this.$logger_$.info($metaError$$2$$)
  }
};
$JSCompiler_prototypeAlias$$.$onFormElementBlur_$ = function $$JSCompiler_prototypeAlias$$$$onFormElementBlur_$$($e$$55$$) {
  $JSCompiler_StaticMethods_processFieldEvent_$$(this, 1, $e$$55$$.target);
  var $caption$$13$$ = $JSCompiler_StaticMethods_getCaptionForElement$$($e$$55$$.target);
  try {
    var $JSCompiler_StaticMethods_runMeta$self$$inline_340$$ = $uniform$Meta$$.$getInstance$();
    $uniform$util$executeFormMetaTags$$(this.$getElement$(), $JSCompiler_StaticMethods_runMeta$self$$inline_340$$.$metaMap_$)
  }catch($metaError$$3$$) {
    this.$logger_$.info($metaError$$3$$)
  }
  try {
    var $JSCompiler_StaticMethods_runValidation$self$$inline_343$$ = $uniform$Validators$$.$getInstance$();
    $uniform$util$executeElementMetaTags$$($e$$55$$.target, "uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_343$$.$metaMap_$, $caption$$13$$);
    $JSCompiler_StaticMethods_processFieldEvent_$$(this, 2, $e$$55$$.target)
  }catch($validationError$$) {
    this.$logger_$.info($validationError$$), $JSCompiler_StaticMethods_processFieldEvent_$$(this, 3, $e$$55$$.target)
  }
};
$JSCompiler_prototypeAlias$$.$onWindowBeforeUnload_$ = function $$JSCompiler_prototypeAlias$$$$onWindowBeforeUnload_$$() {
  var $finalFormValue$$ = $goog$dom$forms$getFormDataString$$(this.$getElement$());
  return this.$initialFormValue_$ != $finalFormValue$$ && $goog$array$contains$$($goog$dom$classes$get$$(this.$getElement$()), "askOnLeave") ? confirm("Are you sure you want to leave this page without saving this form?") : $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.focus = function $$JSCompiler_prototypeAlias$$$focus$() {
  for(var $el$$inline_347_el$$inline_349_els$$8$$ = this.$getElement$().elements, $el$$inline_347_el$$inline_349_els$$8$$ = this.$getElement$().elements, $el$$68$$, $i$$130$$ = 0;$el$$68$$ = $el$$inline_347_el$$inline_349_els$$8$$[$i$$130$$];$i$$130$$++) {
    if(!($el$$68$$.disabled || $el$$68$$.tagName.toLowerCase() === "INPUT".$FIELDSET$)) {
      if("SELECT" === $el$$68$$.tagName) {
        $el$$inline_347_el$$inline_349_els$$8$$ = $el$$68$$;
        $el$$inline_347_el$$inline_349_els$$8$$.focus();
        $el$$inline_347_el$$inline_349_els$$8$$.select && $el$$inline_347_el$$inline_349_els$$8$$.select();
        break
      }else {
        if("INPUT" === $el$$68$$.tagName) {
          $el$$inline_347_el$$inline_349_els$$8$$ = $el$$68$$;
          $el$$inline_347_el$$inline_349_els$$8$$.focus();
          $el$$inline_347_el$$inline_349_els$$8$$.select && $el$$inline_347_el$$inline_349_els$$8$$.select();
          break
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_showFormError$$($JSCompiler_StaticMethods_showFormError$self$$, $messages$$) {
  var $dom$$5$$ = $JSCompiler_StaticMethods_showFormError$self$$.$getDomHelper$(), $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$5$$.$getElement$("errorMsg");
  $currentErrorMsgEl_newErrorMsgEl$$ && $goog$dom$removeNode$$($currentErrorMsgEl_newErrorMsgEl$$);
  var $errorMessagesList$$ = $dom$$5$$.$createDom$("ol");
  $goog$array$forEach$$($messages$$, function($message$$22$$) {
    $errorMessagesList$$.appendChild($dom$$5$$.$createDom$("li", $JSCompiler_alias_VOID$$, $message$$22$$))
  });
  $currentErrorMsgEl_newErrorMsgEl$$ = $dom$$5$$.$createDom$("div", {id:"errorMsg"}, $dom$$5$$.$createDom$("h3", $JSCompiler_alias_VOID$$, "Sorry, this form needs corrections."), $errorMessagesList$$);
  $JSCompiler_StaticMethods_insertSiblingBefore$$($currentErrorMsgEl_newErrorMsgEl$$, $dom$$5$$.$getFirstElementChild$($JSCompiler_StaticMethods_showFormError$self$$.$getElement$()))
}
function $JSCompiler_StaticMethods_getCaptionForElement$$($el$$70$$) {
  var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$70$$, "label");
  if($controlHolderEl$$1_labelEl$$ == $JSCompiler_alias_NULL$$) {
    var $controlHolderEl$$1_labelEl$$ = $goog$dom$getAncestorByTagNameAndClass$$($el$$70$$, $JSCompiler_alias_NULL$$, "ctrlHolder"), $allLabels_caption$$14$$ = $goog$dom$getElementsByTagNameAndClass_$$("label", $JSCompiler_alias_VOID$$, $controlHolderEl$$1_labelEl$$), $controlHolderEl$$1_labelEl$$ = $goog$array$find$$($allLabels_caption$$14$$, function($lbEl$$) {
      if(($lbEl$$.nextElementSibling != $JSCompiler_alias_VOID$$ ? $lbEl$$.nextElementSibling : $goog$dom$getNextElementNode_$$($lbEl$$.nextSibling)) == $el$$70$$) {
        return $JSCompiler_alias_TRUE$$
      }
    });
    $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ || ($controlHolderEl$$1_labelEl$$ = $allLabels_caption$$14$$[0])
  }
  $allLabels_caption$$14$$ = "";
  $controlHolderEl$$1_labelEl$$ != $JSCompiler_alias_NULL$$ && ($allLabels_caption$$14$$ = $goog$dom$getTextContent$$($controlHolderEl$$1_labelEl$$));
  return $allLabels_caption$$14$$
}
function $JSCompiler_StaticMethods_validate$$($JSCompiler_StaticMethods_validate$self$$) {
  for(var $errors$$ = [], $els$$9$$ = $JSCompiler_StaticMethods_validate$self$$.$getElement$().elements, $controlHolderEl$$2_el$$71$$, $i$$131$$ = 0;$controlHolderEl$$2_el$$71$$ = $els$$9$$[$i$$131$$];$i$$131$$++) {
    if(!($controlHolderEl$$2_el$$71$$.disabled || "fieldset" == $controlHolderEl$$2_el$$71$$.tagName.toLowerCase())) {
      var $caption$$15$$ = $JSCompiler_StaticMethods_getCaptionForElement$$($controlHolderEl$$2_el$$71$$);
      try {
        var $JSCompiler_StaticMethods_runValidation$self$$inline_351$$ = $uniform$Validators$$.$getInstance$();
        $uniform$util$executeElementMetaTags$$($controlHolderEl$$2_el$$71$$, "uniform-validators", $JSCompiler_StaticMethods_runValidation$self$$inline_351$$.$metaMap_$, $caption$$15$$)
      }catch($validationError$$1$$) {
        $JSCompiler_StaticMethods_validate$self$$.$logger_$.info($validationError$$1$$), $controlHolderEl$$2_el$$71$$ = $goog$dom$getAncestorByTagNameAndClass$$($controlHolderEl$$2_el$$71$$, $JSCompiler_alias_NULL$$, "ctrlHolder"), $controlHolderEl$$2_el$$71$$ != $JSCompiler_alias_NULL$$ && $goog$dom$classes$add$$($controlHolderEl$$2_el$$71$$, "error"), $errors$$.push($validationError$$1$$)
      }
    }
  }
  return $errors$$
}
$JSCompiler_prototypeAlias$$.$onFormSubmit_$ = function $$JSCompiler_prototypeAlias$$$$onFormSubmit_$$($e$$57$$) {
  var $errors$$1_resSubmit$$ = $JSCompiler_StaticMethods_validate$$(this);
  if(0 < $errors$$1_resSubmit$$.length) {
    return this.dispatchEvent(new $goog$events$Event$$("uniform_invalidated", this)), $JSCompiler_StaticMethods_showFormError$$(this, $errors$$1_resSubmit$$), $goog$dom$classes$add$$(this.$getElement$(), "failedSubmit"), $e$$57$$.preventDefault(), $JSCompiler_alias_FALSE$$
  }
  $goog$dom$classes$remove$$(this.$getElement$(), "failedSubmit");
  $goog$dom$classes$remove$$(this.$getElement$(), "askOnLeave");
  ($errors$$1_resSubmit$$ = this.dispatchEvent(new $goog$events$Event$$("uniform_submit", this))) || $e$$57$$.preventDefault();
  return $errors$$1_resSubmit$$
};
$goog$ui$registry$setDecoratorByClassName$$("uniForm", function() {
  return new $uniform$Uniform$$
});
// Input 73
// Input 74
// Input 75
// Input 76
$goog$userAgent$IE$$ && $goog$userAgent$isVersion$$(8);
// Input 77
// Input 78
// Input 79
function $soy$$0$0escapeHtml$$($value$$98$$) {
  return"object" === typeof $value$$98$$ && $value$$98$$ && 0 === $value$$98$$.$contentKind$ ? $value$$98$$.content : String($value$$98$$).replace($soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$, $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$)
}
var $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$ = {"\x00":"&#0;", '"':"&quot;", "&":"&amp;", "'":"&#39;", "<":"&lt;", ">":"&gt;", "\t":"&#9;", "\n":"&#10;", "\x0B":"&#11;", "\f":"&#12;", "\r":"&#13;", " ":"&#32;", "-":"&#45;", "/":"&#47;", "=":"&#61;", "`":"&#96;", "\u0085":"&#133;", "\u00a0":"&#160;", "\u2028":"&#8232;", "\u2029":"&#8233;"};
function $soy$esc$$0$0REPLACER_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$($ch$$6$$) {
  return $soy$esc$$0$0ESCAPE_MAP_FOR_ESCAPE_HTML__AND__NORMALIZE_HTML__AND__ESCAPE_HTML_NOSPACE__AND__NORMALIZE_HTML_NOSPACE_$$[$ch$$6$$]
}
var $soy$esc$$0$0MATCHER_FOR_ESCAPE_HTML_$$ = /[\x00\x22\x26\x27\x3c\x3e]/g;
// Input 80
function $bitex$ui$Merchant$templates$WithdrawFieldContent$$($opt_data$$3$$) {
  return'<div class="ui-field-contain"><label class="control-label">' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.label) + '</label><input class="withdraw-field" uniform-validators="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.validator) + '" type="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.type) + '" name="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.name) + '" placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.placeholder) + '" value="' + $soy$$0$0escapeHtml$$($opt_data$$3$$.field.value) + 
  '"/></div>'
}
;
// Input 81
function $bitex$model$Model$$($element$$130$$, $opt_map$$1$$, $var_args$$84$$) {
  this.$element_$ = $element$$130$$;
  this.$map_$ = new $goog$structs$Map$$($opt_map$$1$$, $var_args$$84$$)
}
$goog$inherits$$($bitex$model$Model$$, $goog$events$EventTarget$$);
$bitex$model$Model$$.prototype.get = function $$bitex$model$Model$$$$get$($key$$74$$, $opt_val$$2$$) {
  return this.$map_$.get($key$$74$$, $opt_val$$2$$)
};
$bitex$model$Model$$.prototype.set = function $$bitex$model$Model$$$$set$($key$$75$$, $value$$127$$) {
  this.$map_$.set($key$$75$$, $value$$127$$);
  var $elements$$2$$ = $goog$dom$getElementsByClass$$("bitex-model", this.$element_$);
  $goog$array$forEach$$($elements$$2$$, function($el$$73$$) {
    if($el$$73$$.getAttribute("data-model-key") === $key$$75$$ && $goog$dom$getTextContent$$($el$$73$$) !== $value$$127$$) {
      $goog$dom$setTextContent$$($el$$73$$, $value$$127$$);
      var $blink_class$$ = $el$$73$$.getAttribute("data-blink-class");
      if($blink_class$$ != $JSCompiler_alias_NULL$$) {
        var $blink_delay$$ = $el$$73$$.getAttribute("data-blink-delay") || 700, $blink_delay$$ = parseInt($blink_delay$$, 10);
        $goog$dom$classes$add$$($el$$73$$, $blink_class$$);
        $goog$Timer$callOnce$$(function() {
          $goog$dom$classes$remove$$($el$$73$$, $blink_class$$)
        }, $blink_delay$$, this)
      }
    }
  });
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set" + $key$$75$$, $key$$75$$, $value$$127$$));
  this.dispatchEvent(new $bitex$model$ModelEvent$$("model_set", $key$$75$$, $value$$127$$))
};
function $bitex$model$ModelEvent$$($type$$98$$, $key$$76$$, $data$$32$$) {
  $goog$events$Event$$.call(this, $type$$98$$);
  this.key = $key$$76$$;
  this.data = $data$$32$$
}
$goog$inherits$$($bitex$model$ModelEvent$$, $goog$events$Event$$);
// Input 82
var $goog$i18n$NumberFormatSymbols_en$$ = {$DECIMAL_SEP$:".", $GROUP_SEP$:",", $PERCENT$:"%", $ZERO_DIGIT$:"0", $PLUS_SIGN$:"+", $MINUS_SIGN$:"-", $EXP_SYMBOL$:"E", $PERMILL$:"\u2030", $INFINITY$:"\u221e", $NAN$:"NaN", $DECIMAL_PATTERN$:"#,##0.###", $SCIENTIFIC_PATTERN$:"#E0", $PERCENT_PATTERN$:"#,##0%", $CURRENCY_PATTERN$:"\u00a4#,##0.00;(\u00a4#,##0.00)", $DEF_CURRENCY_CODE$:"USD"}, $goog$i18n$NumberFormatSymbols$$ = $goog$i18n$NumberFormatSymbols_en$$, $goog$i18n$NumberFormatSymbols$$ = $goog$i18n$NumberFormatSymbols_en$$;
// Input 83
var $goog$i18n$currency$CurrencyInfo$$ = {AED:[2, "dh", "\u062f.\u0625.", "DH"], AUD:[2, "$", "AU$"], BDT:[2, "\u09f3", "Tk"], BRL:[2, "R$", "R$"], CAD:[2, "$", "C$"], CHF:[2, "CHF", "CHF"], CLP:[0, "$", "CL$"], CNY:[2, "\u00a5", "RMB\u00a5"], COP:[0, "$", "COL$"], CRC:[0, "\u20a1", "CR\u20a1"], CZK:[2, "K\u010d", "K\u010d"], DKK:[18, "kr", "kr"], DOP:[2, "$", "RD$"], EGP:[2, "\u00a3", "LE"], EUR:[18, "\u20ac", "\u20ac"], GBP:[2, "\u00a3", "GB\u00a3"], HKD:[2, "$", "HK$"], ILS:[2, "\u20aa", "IL\u20aa"], 
INR:[2, "\u20b9", "Rs"], ISK:[0, "kr", "kr"], JMD:[2, "$", "JA$"], JPY:[0, "\u00a5", "JP\u00a5"], KRW:[0, "\u20a9", "KR\u20a9"], LKR:[2, "Rs", "SLRs"], MNT:[0, "\u20ae", "MN\u20ae"], MXN:[2, "$", "Mex$"], MYR:[2, "RM", "RM"], NOK:[18, "kr", "NOkr"], PAB:[2, "B/.", "B/."], PEN:[2, "S/.", "S/."], PHP:[2, "\u20b1", "Php"], PKR:[0, "Rs", "PKRs."], RUB:[42, "\u0440\u0443\u0431.", "\u0440\u0443\u0431."], SAR:[2, "Rial", "Rial"], SEK:[2, "kr", "kr"], SGD:[2, "$", "S$"], THB:[2, "\u0e3f", "THB"], TRY:[2, 
"TL", "YTL"], TWD:[2, "NT$", "NT$"], USD:[2, "$", "US$"], UYU:[2, "$", "UY$"], VND:[0, "\u20ab", "VN\u20ab"], YER:[0, "Rial", "Rial"], ZAR:[2, "R", "ZAR"]};
// Input 84
function $goog$i18n$NumberFormat$$($JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$, $opt_currency_strParts$$inline_824$$, $opt_currencyStyle_precision$$inline_825$$) {
  this.$intlCurrencyCode_$ = $opt_currency_strParts$$inline_824$$ || $goog$i18n$NumberFormatSymbols$$.$DEF_CURRENCY_CODE$;
  this.$currencyStyle_$ = $opt_currencyStyle_precision$$inline_825$$ || $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$;
  this.$maximumIntegerDigits_$ = 40;
  this.$minimumIntegerDigits_$ = 1;
  this.$maximumFractionDigits_$ = 3;
  this.$minExponentDigits_$ = this.$minimumFractionDigits_$ = 0;
  this.$useSignForPositiveExponent_$ = $JSCompiler_alias_FALSE$$;
  this.$positiveSuffix_$ = this.$positivePrefix_$ = "";
  this.$negativePrefix_$ = "-";
  this.$negativeSuffix_$ = "";
  this.$multiplier_$ = 1;
  this.$groupingSize_$ = 3;
  this.$useExponentialNotation_$ = this.$decimalSeparatorAlwaysShown_$ = $JSCompiler_alias_FALSE$$;
  if("number" == typeof $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$) {
    switch($JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$) {
      case 1:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$DECIMAL_PATTERN$);
        break;
      case 2:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$SCIENTIFIC_PATTERN$);
        break;
      case 3:
        $JSCompiler_StaticMethods_applyPattern_$$(this, $goog$i18n$NumberFormatSymbols$$.$PERCENT_PATTERN$);
        break;
      case 4:
        $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$ = $goog$i18n$NumberFormatSymbols$$.$CURRENCY_PATTERN$;
        $opt_currency_strParts$$inline_824$$ = ["0"];
        $opt_currencyStyle_precision$$inline_825$$ = $goog$i18n$currency$CurrencyInfo$$[this.$intlCurrencyCode_$][0] & 7;
        if(0 < $opt_currencyStyle_precision$$inline_825$$) {
          $opt_currency_strParts$$inline_824$$.push(".");
          for(var $i$$inline_826$$ = 0;$i$$inline_826$$ < $opt_currencyStyle_precision$$inline_825$$;$i$$inline_826$$++) {
            $opt_currency_strParts$$inline_824$$.push("0")
          }
        }
        $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$ = $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$.replace(/0.00/g, $opt_currency_strParts$$inline_824$$.join(""));
        $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$);
        break;
      default:
        $JSCompiler_alias_THROW$$(Error("Unsupported pattern type."))
    }
  }else {
    $JSCompiler_StaticMethods_applyPattern_$$(this, $JSCompiler_inline_result$$764_pattern$$2_pattern$$inline_823$$)
  }
}
var $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$ = 0;
function $JSCompiler_StaticMethods_setMinimumFractionDigits$$($JSCompiler_StaticMethods_setMinimumFractionDigits$self$$) {
  2 > $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$maximumFractionDigits_$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMinimumFractionDigits$self$$.$minimumFractionDigits_$ = 2
}
function $JSCompiler_StaticMethods_setMaximumFractionDigits$$($JSCompiler_StaticMethods_setMaximumFractionDigits$self$$) {
  2 < $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$minimumFractionDigits_$ && $JSCompiler_alias_THROW$$(Error("Min value must be less than max value"));
  $JSCompiler_StaticMethods_setMaximumFractionDigits$self$$.$maximumFractionDigits_$ = 2
}
function $JSCompiler_StaticMethods_applyPattern_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$) {
  $JSCompiler_StaticMethods_applyPattern_$self$$.$pattern_$ = $pattern$$3$$.replace(/ /g, "\u00a0");
  var $pos$$6$$ = [0];
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$);
  for(var $trunkLen_trunkStart$$ = $pos$$6$$[0], $decimalPos$$inline_361$$ = -1, $digitLeftCount$$inline_362$$ = 0, $n$$inline_368_zeroDigitCount$$inline_363$$ = 0, $digitRightCount$$inline_364_totalDigits$$inline_369$$ = 0, $groupingCount$$inline_365$$ = -1, $len$$inline_366$$ = $pattern$$3$$.length, $loop$$inline_367$$ = $JSCompiler_alias_TRUE$$;$pos$$6$$[0] < $len$$inline_366$$ && $loop$$inline_367$$;$pos$$6$$[0]++) {
    switch($pattern$$3$$.charAt($pos$$6$$[0])) {
      case "#":
        0 < $n$$inline_368_zeroDigitCount$$inline_363$$ ? $digitRightCount$$inline_364_totalDigits$$inline_369$$++ : $digitLeftCount$$inline_362$$++;
        0 <= $groupingCount$$inline_365$$ && 0 > $decimalPos$$inline_361$$ && $groupingCount$$inline_365$$++;
        break;
      case "0":
        0 < $digitRightCount$$inline_364_totalDigits$$inline_369$$ && $JSCompiler_alias_THROW$$(Error('Unexpected "0" in pattern "' + $pattern$$3$$ + '"'));
        $n$$inline_368_zeroDigitCount$$inline_363$$++;
        0 <= $groupingCount$$inline_365$$ && 0 > $decimalPos$$inline_361$$ && $groupingCount$$inline_365$$++;
        break;
      case ",":
        $groupingCount$$inline_365$$ = 0;
        break;
      case ".":
        0 <= $decimalPos$$inline_361$$ && $JSCompiler_alias_THROW$$(Error('Multiple decimal separators in pattern "' + $pattern$$3$$ + '"'));
        $decimalPos$$inline_361$$ = $digitLeftCount$$inline_362$$ + $n$$inline_368_zeroDigitCount$$inline_363$$ + $digitRightCount$$inline_364_totalDigits$$inline_369$$;
        break;
      case "E":
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && $JSCompiler_alias_THROW$$(Error('Multiple exponential symbols in pattern "' + $pattern$$3$$ + '"'));
        $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ = $JSCompiler_alias_TRUE$$;
        $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$ = 0;
        $pos$$6$$[0] + 1 < $len$$inline_366$$ && "+" == $pattern$$3$$.charAt($pos$$6$$[0] + 1) && ($pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$useSignForPositiveExponent_$ = $JSCompiler_alias_TRUE$$);
        for(;$pos$$6$$[0] + 1 < $len$$inline_366$$ && "0" == $pattern$$3$$.charAt($pos$$6$$[0] + 1);) {
          $pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$++
        }
        (1 > $digitLeftCount$$inline_362$$ + $n$$inline_368_zeroDigitCount$$inline_363$$ || 1 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minExponentDigits_$) && $JSCompiler_alias_THROW$$(Error('Malformed exponential pattern "' + $pattern$$3$$ + '"'));
        $loop$$inline_367$$ = $JSCompiler_alias_FALSE$$;
        break;
      default:
        $pos$$6$$[0]--, $loop$$inline_367$$ = $JSCompiler_alias_FALSE$$
    }
  }
  0 == $n$$inline_368_zeroDigitCount$$inline_363$$ && (0 < $digitLeftCount$$inline_362$$ && 0 <= $decimalPos$$inline_361$$) && ($n$$inline_368_zeroDigitCount$$inline_363$$ = $decimalPos$$inline_361$$, 0 == $n$$inline_368_zeroDigitCount$$inline_363$$ && $n$$inline_368_zeroDigitCount$$inline_363$$++, $digitRightCount$$inline_364_totalDigits$$inline_369$$ = $digitLeftCount$$inline_362$$ - $n$$inline_368_zeroDigitCount$$inline_363$$, $digitLeftCount$$inline_362$$ = $n$$inline_368_zeroDigitCount$$inline_363$$ - 
  1, $n$$inline_368_zeroDigitCount$$inline_363$$ = 1);
  (0 > $decimalPos$$inline_361$$ && 0 < $digitRightCount$$inline_364_totalDigits$$inline_369$$ || 0 <= $decimalPos$$inline_361$$ && ($decimalPos$$inline_361$$ < $digitLeftCount$$inline_362$$ || $decimalPos$$inline_361$$ > $digitLeftCount$$inline_362$$ + $n$$inline_368_zeroDigitCount$$inline_363$$) || 0 == $groupingCount$$inline_365$$) && $JSCompiler_alias_THROW$$(Error('Malformed pattern "' + $pattern$$3$$ + '"'));
  $digitRightCount$$inline_364_totalDigits$$inline_369$$ = $digitLeftCount$$inline_362$$ + $n$$inline_368_zeroDigitCount$$inline_363$$ + $digitRightCount$$inline_364_totalDigits$$inline_369$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ = 0 <= $decimalPos$$inline_361$$ ? $digitRightCount$$inline_364_totalDigits$$inline_369$$ - $decimalPos$$inline_361$$ : 0;
  0 <= $decimalPos$$inline_361$$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = $digitLeftCount$$inline_362$$ + $n$$inline_368_zeroDigitCount$$inline_363$$ - $decimalPos$$inline_361$$, 0 > $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumFractionDigits_$ = 0));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = (0 <= $decimalPos$$inline_361$$ ? $decimalPos$$inline_361$$ : $digitRightCount$$inline_364_totalDigits$$inline_369$$) - $digitLeftCount$$inline_362$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$useExponentialNotation_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$maximumIntegerDigits_$ = $digitLeftCount$$inline_362$$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$, 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$maximumFractionDigits_$ && 0 == $JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ && ($JSCompiler_StaticMethods_applyPattern_$self$$.$minimumIntegerDigits_$ = 1));
  $JSCompiler_StaticMethods_applyPattern_$self$$.$groupingSize_$ = Math.max(0, $groupingCount$$inline_365$$);
  $JSCompiler_StaticMethods_applyPattern_$self$$.$decimalSeparatorAlwaysShown_$ = 0 == $decimalPos$$inline_361$$ || $decimalPos$$inline_361$$ == $digitRightCount$$inline_364_totalDigits$$inline_369$$;
  $trunkLen_trunkStart$$ = $pos$$6$$[0] - $trunkLen_trunkStart$$;
  $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$);
  $pos$$6$$[0] < $pattern$$3$$.length && $pattern$$3$$.charAt($pos$$6$$[0]) == $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ ? ($pos$$6$$[0]++, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, $pattern$$3$$, $pos$$6$$), $pos$$6$$[0] += $trunkLen_trunkStart$$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ = $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_applyPattern_$self$$, 
  $pattern$$3$$, $pos$$6$$)) : ($JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$ = $JSCompiler_StaticMethods_applyPattern_$self$$.$positivePrefix_$ + $JSCompiler_StaticMethods_applyPattern_$self$$.$negativePrefix_$, $JSCompiler_StaticMethods_applyPattern_$self$$.$negativeSuffix_$ += $JSCompiler_StaticMethods_applyPattern_$self$$.$positiveSuffix_$)
}
$goog$i18n$NumberFormat$$.prototype.parse = function $$goog$i18n$NumberFormat$$$$parse$($text$$15$$, $opt_pos$$) {
  var $pos$$7$$ = $opt_pos$$ || [0], $ret$$4_text$$inline_372$$ = NaN;
  $text$$15$$ = $text$$15$$.replace(/ /g, "\u00a0");
  var $gotPositive$$ = $text$$15$$.indexOf(this.$positivePrefix_$, $pos$$7$$[0]) == $pos$$7$$[0], $gotNegative$$ = $text$$15$$.indexOf(this.$negativePrefix_$, $pos$$7$$[0]) == $pos$$7$$[0];
  $gotPositive$$ && $gotNegative$$ && (this.$positivePrefix_$.length > this.$negativePrefix_$.length ? $gotNegative$$ = $JSCompiler_alias_FALSE$$ : this.$positivePrefix_$.length < this.$negativePrefix_$.length && ($gotPositive$$ = $JSCompiler_alias_FALSE$$));
  $gotPositive$$ ? $pos$$7$$[0] += this.$positivePrefix_$.length : $gotNegative$$ && ($pos$$7$$[0] += this.$negativePrefix_$.length);
  if($text$$15$$.indexOf($goog$i18n$NumberFormatSymbols$$.$INFINITY$, $pos$$7$$[0]) == $pos$$7$$[0]) {
    $pos$$7$$[0] += $goog$i18n$NumberFormatSymbols$$.$INFINITY$.length, $ret$$4_text$$inline_372$$ = Infinity
  }else {
    for(var $ret$$4_text$$inline_372$$ = $text$$15$$, $sawDecimal$$inline_374$$ = $JSCompiler_alias_FALSE$$, $sawExponent$$inline_375$$ = $JSCompiler_alias_FALSE$$, $sawDigit$$inline_376$$ = $JSCompiler_alias_FALSE$$, $scale$$inline_377$$ = 1, $decimal$$inline_378$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$inline_379$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $exponentChar$$inline_380$$ = $goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$, $normalizedText$$inline_381$$ = "";$pos$$7$$[0] < 
    $ret$$4_text$$inline_372$$.length;$pos$$7$$[0]++) {
      var $ch$$inline_382$$ = $ret$$4_text$$inline_372$$.charAt($pos$$7$$[0]), $digit$$inline_383$$ = $JSCompiler_StaticMethods_getDigit_$$($ch$$inline_382$$);
      if(0 <= $digit$$inline_383$$ && 9 >= $digit$$inline_383$$) {
        $normalizedText$$inline_381$$ += $digit$$inline_383$$, $sawDigit$$inline_376$$ = $JSCompiler_alias_TRUE$$
      }else {
        if($ch$$inline_382$$ == $decimal$$inline_378$$.charAt(0)) {
          if($sawDecimal$$inline_374$$ || $sawExponent$$inline_375$$) {
            break
          }
          $normalizedText$$inline_381$$ += ".";
          $sawDecimal$$inline_374$$ = $JSCompiler_alias_TRUE$$
        }else {
          if($ch$$inline_382$$ == $grouping$$inline_379$$.charAt(0) && ("\u00a0" != $grouping$$inline_379$$.charAt(0) || $pos$$7$$[0] + 1 < $ret$$4_text$$inline_372$$.length && 0 <= $JSCompiler_StaticMethods_getDigit_$$($ret$$4_text$$inline_372$$.charAt($pos$$7$$[0] + 1)))) {
            if($sawDecimal$$inline_374$$ || $sawExponent$$inline_375$$) {
              break
            }
          }else {
            if($ch$$inline_382$$ == $exponentChar$$inline_380$$.charAt(0)) {
              if($sawExponent$$inline_375$$) {
                break
              }
              $normalizedText$$inline_381$$ += "E";
              $sawExponent$$inline_375$$ = $JSCompiler_alias_TRUE$$
            }else {
              if("+" == $ch$$inline_382$$ || "-" == $ch$$inline_382$$) {
                $normalizedText$$inline_381$$ += $ch$$inline_382$$
              }else {
                if($ch$$inline_382$$ == $goog$i18n$NumberFormatSymbols$$.$PERCENT$.charAt(0)) {
                  if(1 != $scale$$inline_377$$) {
                    break
                  }
                  $scale$$inline_377$$ = 100;
                  if($sawDigit$$inline_376$$) {
                    $pos$$7$$[0]++;
                    break
                  }
                }else {
                  if($ch$$inline_382$$ == $goog$i18n$NumberFormatSymbols$$.$PERMILL$.charAt(0)) {
                    if(1 != $scale$$inline_377$$) {
                      break
                    }
                    $scale$$inline_377$$ = 1E3;
                    if($sawDigit$$inline_376$$) {
                      $pos$$7$$[0]++;
                      break
                    }
                  }else {
                    break
                  }
                }
              }
            }
          }
        }
      }
    }
    $ret$$4_text$$inline_372$$ = parseFloat($normalizedText$$inline_381$$) / $scale$$inline_377$$
  }
  if($gotPositive$$) {
    if($text$$15$$.indexOf(this.$positiveSuffix_$, $pos$$7$$[0]) != $pos$$7$$[0]) {
      return NaN
    }
    $pos$$7$$[0] += this.$positiveSuffix_$.length
  }else {
    if($gotNegative$$) {
      if($text$$15$$.indexOf(this.$negativeSuffix_$, $pos$$7$$[0]) != $pos$$7$$[0]) {
        return NaN
      }
      $pos$$7$$[0] += this.$negativeSuffix_$.length
    }
  }
  return $gotNegative$$ ? -$ret$$4_text$$inline_372$$ : $ret$$4_text$$inline_372$$
};
$goog$i18n$NumberFormat$$.prototype.$format$ = function $$goog$i18n$NumberFormat$$$$$format$$($number_number$$inline_386$$) {
  if(isNaN($number_number$$inline_386$$)) {
    return $goog$i18n$NumberFormatSymbols$$.$NAN$
  }
  var $parts$$3$$ = [], $isNegative$$ = 0 > $number_number$$inline_386$$ || 0 == $number_number$$inline_386$$ && 0 > 1 / $number_number$$inline_386$$;
  $parts$$3$$.push($isNegative$$ ? this.$negativePrefix_$ : this.$positivePrefix_$);
  if(isFinite($number_number$$inline_386$$)) {
    if($number_number$$inline_386$$ = $number_number$$inline_386$$ * ($isNegative$$ ? -1 : 1) * this.$multiplier_$, this.$useExponentialNotation_$) {
      if(0 == $number_number$$inline_386$$) {
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_386$$, this.$minimumIntegerDigits_$, $parts$$3$$), $JSCompiler_StaticMethods_addExponentPart_$$(this, 0, $parts$$3$$)
      }else {
        var $exponent$$inline_388$$ = Math.floor(Math.log($number_number$$inline_386$$) / Math.log(10));
        $number_number$$inline_386$$ /= Math.pow(10, $exponent$$inline_388$$);
        var $minIntDigits$$inline_389$$ = this.$minimumIntegerDigits_$;
        if(1 < this.$maximumIntegerDigits_$ && this.$maximumIntegerDigits_$ > this.$minimumIntegerDigits_$) {
          for(;0 != $exponent$$inline_388$$ % this.$maximumIntegerDigits_$;) {
            $number_number$$inline_386$$ *= 10, $exponent$$inline_388$$--
          }
          $minIntDigits$$inline_389$$ = 1
        }else {
          1 > this.$minimumIntegerDigits_$ ? ($exponent$$inline_388$$++, $number_number$$inline_386$$ /= 10) : ($exponent$$inline_388$$ -= this.$minimumIntegerDigits_$ - 1, $number_number$$inline_386$$ *= Math.pow(10, this.$minimumIntegerDigits_$ - 1))
        }
        $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_386$$, $minIntDigits$$inline_389$$, $parts$$3$$);
        $JSCompiler_StaticMethods_addExponentPart_$$(this, $exponent$$inline_388$$, $parts$$3$$)
      }
    }else {
      $JSCompiler_StaticMethods_subformatFixed_$$(this, $number_number$$inline_386$$, this.$minimumIntegerDigits_$, $parts$$3$$)
    }
  }else {
    $parts$$3$$.push($goog$i18n$NumberFormatSymbols$$.$INFINITY$)
  }
  $parts$$3$$.push($isNegative$$ ? this.$negativeSuffix_$ : this.$positiveSuffix_$);
  return $parts$$3$$.join("")
};
function $JSCompiler_StaticMethods_subformatFixed_$$($JSCompiler_StaticMethods_subformatFixed_$self$$, $i$$139_intValue_number$$1$$, $fracPart_minIntDigits$$, $parts$$4$$) {
  var $fracLen_power$$ = Math.pow(10, $JSCompiler_StaticMethods_subformatFixed_$self$$.$maximumFractionDigits_$), $shiftedNumber_translatableInt_zeroCode$$ = Math.round($i$$139_intValue_number$$1$$ * $fracLen_power$$), $fracValue$$;
  isFinite($shiftedNumber_translatableInt_zeroCode$$) ? ($i$$139_intValue_number$$1$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ / $fracLen_power$$), $fracValue$$ = Math.floor($shiftedNumber_translatableInt_zeroCode$$ - $i$$139_intValue_number$$1$$ * $fracLen_power$$)) : $fracValue$$ = 0;
  for(var $fractionPresent$$ = 0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ || 0 < $fracValue$$, $intPart$$ = "", $shiftedNumber_translatableInt_zeroCode$$ = $i$$139_intValue_number$$1$$;1E20 < $shiftedNumber_translatableInt_zeroCode$$;) {
    $intPart$$ = "0" + $intPart$$, $shiftedNumber_translatableInt_zeroCode$$ = Math.round($shiftedNumber_translatableInt_zeroCode$$ / 10)
  }
  var $intPart$$ = $shiftedNumber_translatableInt_zeroCode$$ + $intPart$$, $decimal$$1$$ = $goog$i18n$NumberFormatSymbols$$.$DECIMAL_SEP$, $grouping$$1$$ = $goog$i18n$NumberFormatSymbols$$.$GROUP_SEP$, $shiftedNumber_translatableInt_zeroCode$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0), $digitLen$$ = $intPart$$.length;
  if(0 < $i$$139_intValue_number$$1$$ || 0 < $fracPart_minIntDigits$$) {
    for($i$$139_intValue_number$$1$$ = $digitLen$$;$i$$139_intValue_number$$1$$ < $fracPart_minIntDigits$$;$i$$139_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
    }
    for($i$$139_intValue_number$$1$$ = 0;$i$$139_intValue_number$$1$$ < $digitLen$$;$i$$139_intValue_number$$1$$++) {
      $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $intPart$$.charAt($i$$139_intValue_number$$1$$))), 1 < $digitLen$$ - $i$$139_intValue_number$$1$$ && (0 < $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$ && 1 == ($digitLen$$ - $i$$139_intValue_number$$1$$) % $JSCompiler_StaticMethods_subformatFixed_$self$$.$groupingSize_$) && $parts$$4$$.push($grouping$$1$$)
    }
  }else {
    $fractionPresent$$ || $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$))
  }
  ($JSCompiler_StaticMethods_subformatFixed_$self$$.$decimalSeparatorAlwaysShown_$ || $fractionPresent$$) && $parts$$4$$.push($decimal$$1$$);
  $fracPart_minIntDigits$$ = "" + ($fracValue$$ + $fracLen_power$$);
  for($fracLen_power$$ = $fracPart_minIntDigits$$.length;"0" == $fracPart_minIntDigits$$.charAt($fracLen_power$$ - 1) && $fracLen_power$$ > $JSCompiler_StaticMethods_subformatFixed_$self$$.$minimumFractionDigits_$ + 1;) {
    $fracLen_power$$--
  }
  for($i$$139_intValue_number$$1$$ = 1;$i$$139_intValue_number$$1$$ < $fracLen_power$$;$i$$139_intValue_number$$1$$++) {
    $parts$$4$$.push(String.fromCharCode($shiftedNumber_translatableInt_zeroCode$$ + 1 * $fracPart_minIntDigits$$.charAt($i$$139_intValue_number$$1$$)))
  }
}
function $JSCompiler_StaticMethods_addExponentPart_$$($JSCompiler_StaticMethods_addExponentPart_$self$$, $exponent_exponentDigits$$, $parts$$5$$) {
  $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$EXP_SYMBOL$);
  0 > $exponent_exponentDigits$$ ? ($exponent_exponentDigits$$ = -$exponent_exponentDigits$$, $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$MINUS_SIGN$)) : $JSCompiler_StaticMethods_addExponentPart_$self$$.$useSignForPositiveExponent_$ && $parts$$5$$.push($goog$i18n$NumberFormatSymbols$$.$PLUS_SIGN$);
  $exponent_exponentDigits$$ = "" + $exponent_exponentDigits$$;
  for(var $zeroChar$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$, $i$$140$$ = $exponent_exponentDigits$$.length;$i$$140$$ < $JSCompiler_StaticMethods_addExponentPart_$self$$.$minExponentDigits_$;$i$$140$$++) {
    $parts$$5$$.push($zeroChar$$)
  }
  $parts$$5$$.push($exponent_exponentDigits$$)
}
function $JSCompiler_StaticMethods_getDigit_$$($ch$$11_code$$4$$) {
  $ch$$11_code$$4$$ = $ch$$11_code$$4$$.charCodeAt(0);
  if(48 <= $ch$$11_code$$4$$ && 58 > $ch$$11_code$$4$$) {
    return $ch$$11_code$$4$$ - 48
  }
  var $zeroCode$$1$$ = $goog$i18n$NumberFormatSymbols$$.$ZERO_DIGIT$.charCodeAt(0);
  return $zeroCode$$1$$ <= $ch$$11_code$$4$$ && $ch$$11_code$$4$$ < $zeroCode$$1$$ + 10 ? $ch$$11_code$$4$$ - $zeroCode$$1$$ : -1
}
var $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$ = ";";
function $JSCompiler_StaticMethods_parseAffix_$$($JSCompiler_StaticMethods_parseAffix_$self$$, $pattern$$4$$, $pos$$9$$) {
  for(var $affix$$ = "", $inQuote$$ = $JSCompiler_alias_FALSE$$, $len$$3$$ = $pattern$$4$$.length;$pos$$9$$[0] < $len$$3$$;$pos$$9$$[0]++) {
    var $ch$$12_currencyCode$$inline_391$$ = $pattern$$4$$.charAt($pos$$9$$[0]);
    if("'" == $ch$$12_currencyCode$$inline_391$$) {
      $pos$$9$$[0] + 1 < $len$$3$$ && "'" == $pattern$$4$$.charAt($pos$$9$$[0] + 1) ? ($pos$$9$$[0]++, $affix$$ += "'") : $inQuote$$ = !$inQuote$$
    }else {
      if($inQuote$$) {
        $affix$$ += $ch$$12_currencyCode$$inline_391$$
      }else {
        switch($ch$$12_currencyCode$$inline_391$$) {
          case "#":
          ;
          case "0":
          ;
          case ",":
          ;
          case ".":
          ;
          case $goog$i18n$NumberFormat$PATTERN_SEPARATOR_$$:
            return $affix$$;
          case "\u00a4":
            if($pos$$9$$[0] + 1 < $len$$3$$ && "\u00a4" == $pattern$$4$$.charAt($pos$$9$$[0] + 1)) {
              $pos$$9$$[0]++, $affix$$ += $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$
            }else {
              switch($JSCompiler_StaticMethods_parseAffix_$self$$.$currencyStyle_$) {
                case $goog$i18n$NumberFormat$CurrencyStyle$LOCAL$$:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][1];
                  break;
                case 2:
                  var $ch$$12_currencyCode$$inline_391$$ = $JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$, $info$$inline_392$$ = $goog$i18n$currency$CurrencyInfo$$[$ch$$12_currencyCode$$inline_391$$], $affix$$ = $affix$$ + ($ch$$12_currencyCode$$inline_391$$ == $info$$inline_392$$[1] ? $ch$$12_currencyCode$$inline_391$$ : $ch$$12_currencyCode$$inline_391$$ + " " + $info$$inline_392$$[1]);
                  break;
                case 1:
                  $affix$$ += $goog$i18n$currency$CurrencyInfo$$[$JSCompiler_StaticMethods_parseAffix_$self$$.$intlCurrencyCode_$][2]
              }
            }
            break;
          case "%":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 100;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERCENT$;
            break;
          case "\u2030":
            1 != $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ && $JSCompiler_alias_THROW$$(Error("Too many percent/permill"));
            $JSCompiler_StaticMethods_parseAffix_$self$$.$multiplier_$ = 1E3;
            $affix$$ += $goog$i18n$NumberFormatSymbols$$.$PERMILL$;
            break;
          default:
            $affix$$ += $ch$$12_currencyCode$$inline_391$$
        }
      }
    }
  }
  return $affix$$
}
;
// Input 85
function $goog$net$WebSocket$$($opt_autoReconnect$$, $opt_getNextReconnect$$) {
  $goog$Disposable$$.call(this);
  this.$autoReconnect_$ = $opt_autoReconnect$$ !== $JSCompiler_alias_VOID$$ ? $opt_autoReconnect$$ : $JSCompiler_alias_TRUE$$;
  this.$getNextReconnect_$ = $opt_getNextReconnect$$ || $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
}
$goog$inherits$$($goog$net$WebSocket$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.$webSocket_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$url_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$protocol_$ = $JSCompiler_alias_VOID$$;
$JSCompiler_prototypeAlias$$.$closeExpected_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$reconnectAttempt_$ = 0;
$JSCompiler_prototypeAlias$$.$logger_$ = $goog$debug$LogManager$getLogger$$("goog.net.WebSocket");
var $goog$net$WebSocket$EventType$CLOSED$$ = "closed_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$ERROR$$ = "error_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$MESSAGE$$ = "message_" + $goog$events$uniqueIdCounter_$$++, $goog$net$WebSocket$EventType$OPENED$$ = "opened_" + $goog$events$uniqueIdCounter_$$++;
function $goog$net$WebSocket$EXPONENTIAL_BACKOFF_$$($attempt$$) {
  return Math.min(1E3 * Math.pow(2, $attempt$$), 6E4)
}
$JSCompiler_prototypeAlias$$ = $goog$net$WebSocket$$.prototype;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$30$$, $opt_protocol$$1$$) {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$url_$ = $url$$30$$;
  (this.$protocol_$ = $opt_protocol$$1$$) ? (this.$logger_$.info("Opening the WebSocket on " + this.$url_$ + " with protocol " + this.$protocol_$), this.$webSocket_$ = new WebSocket(this.$url_$, this.$protocol_$)) : (this.$logger_$.info("Opening the WebSocket on " + this.$url_$), this.$webSocket_$ = new WebSocket(this.$url_$));
  this.$webSocket_$.onopen = $goog$bind$$(this.$onOpen_$, this);
  this.$webSocket_$.onclose = $goog$bind$$(this.$onClose_$, this);
  this.$webSocket_$.onmessage = $goog$bind$$(this.$onMessage_$, this);
  this.$webSocket_$.onerror = $goog$bind$$(this.$onError_$, this)
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$reconnectTimer_$ != $JSCompiler_alias_NULL$$ && $goog$Timer$defaultTimerObject$$.clearTimeout(this.$reconnectTimer_$);
  this.$reconnectTimer_$ = $JSCompiler_alias_NULL$$;
  this.$webSocket_$ && (this.$logger_$.info("Closing the WebSocket."), this.$closeExpected_$ = $JSCompiler_alias_TRUE$$, this.$webSocket_$.close(), this.$webSocket_$ = $JSCompiler_alias_NULL$$)
};
$JSCompiler_prototypeAlias$$.send = function $$JSCompiler_prototypeAlias$$$send$($message$$23$$) {
  this.$webSocket_$.send($message$$23$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!this.$webSocket_$ && 1 == this.$webSocket_$.readyState
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.$logger_$.info("WebSocket opened on " + this.$url_$);
  this.dispatchEvent($goog$net$WebSocket$EventType$OPENED$$);
  this.$reconnectAttempt_$ = 0;
  this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$($event$$5$$) {
  this.$logger_$.info("The WebSocket on " + this.$url_$ + " closed.");
  this.dispatchEvent($goog$net$WebSocket$EventType$CLOSED$$);
  this.$webSocket_$ = $JSCompiler_alias_NULL$$;
  this.$closeExpected_$ ? (this.$logger_$.info("The WebSocket closed normally."), this.$url_$ = $JSCompiler_alias_NULL$$, this.$protocol_$ = $JSCompiler_alias_VOID$$) : (this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "The WebSocket disconnected unexpectedly: " + $event$$5$$.data, $JSCompiler_alias_VOID$$), this.$autoReconnect_$ && (this.$logger_$.info("Seconds until next reconnect attempt: " + Math.floor(this.$nextReconnect_$ / 1E3)), this.$reconnectTimer_$ = $goog$Timer$callOnce$$($goog$bind$$(this.open, 
  this, this.$url_$, this.$protocol_$), this.$nextReconnect_$, this), this.$reconnectAttempt_$++, this.$nextReconnect_$ = this.$getNextReconnect_$(this.$reconnectAttempt_$)));
  this.$closeExpected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($event$$6$$) {
  this.dispatchEvent(new $goog$net$WebSocket$MessageEvent$$($event$$6$$.data))
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$($data$$33_event$$7$$) {
  $data$$33_event$$7$$ = $data$$33_event$$7$$.data;
  this.$logger_$.log($goog$debug$Logger$Level$SEVERE$$, "An error occurred: " + $data$$33_event$$7$$, $JSCompiler_alias_VOID$$);
  this.dispatchEvent(new $goog$net$WebSocket$ErrorEvent$$($data$$33_event$$7$$))
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$net$WebSocket$$.$superClass_$.$disposeInternal$.call(this);
  this.close()
};
function $goog$net$WebSocket$MessageEvent$$($message$$25$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$MESSAGE$$);
  this.message = $message$$25$$
}
$goog$inherits$$($goog$net$WebSocket$MessageEvent$$, $goog$events$Event$$);
function $goog$net$WebSocket$ErrorEvent$$($data$$34$$) {
  $goog$events$Event$$.call(this, $goog$net$WebSocket$EventType$ERROR$$);
  this.data = $data$$34$$
}
$goog$inherits$$($goog$net$WebSocket$ErrorEvent$$, $goog$events$Event$$);
// Input 86
function $goog$json$Serializer$$($opt_replacer$$2$$) {
  this.$replacer_$ = $opt_replacer$$2$$
}
$goog$json$Serializer$$.prototype.serialize = function $$goog$json$Serializer$$$$serialize$($object$$6$$) {
  var $sb$$6$$ = [];
  $JSCompiler_StaticMethods_serialize_$$(this, $object$$6$$, $sb$$6$$);
  return $sb$$6$$.join("")
};
function $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $object$$7$$, $sb$$7$$) {
  switch(typeof $object$$7$$) {
    case "string":
      $JSCompiler_StaticMethods_serializeString_$$($object$$7$$, $sb$$7$$);
      break;
    case "number":
      $sb$$7$$.push(isFinite($object$$7$$) && !isNaN($object$$7$$) ? $object$$7$$ : "null");
      break;
    case "boolean":
      $sb$$7$$.push($object$$7$$);
      break;
    case "undefined":
      $sb$$7$$.push("null");
      break;
    case "object":
      if($object$$7$$ == $JSCompiler_alias_NULL$$) {
        $sb$$7$$.push("null");
        break
      }
      if($goog$isArray$$($object$$7$$)) {
        $JSCompiler_StaticMethods_serialize_$self$$.serializeArray($object$$7$$, $sb$$7$$);
        break
      }
      $sb$$7$$.push("{");
      var $sep$$inline_413$$ = "", $key$$inline_414$$;
      for($key$$inline_414$$ in $object$$7$$) {
        if(Object.prototype.hasOwnProperty.call($object$$7$$, $key$$inline_414$$)) {
          var $value$$inline_415$$ = $object$$7$$[$key$$inline_414$$];
          "function" != typeof $value$$inline_415$$ && ($sb$$7$$.push($sep$$inline_413$$), $JSCompiler_StaticMethods_serializeString_$$($key$$inline_414$$, $sb$$7$$), $sb$$7$$.push(":"), $JSCompiler_StaticMethods_serialize_$$($JSCompiler_StaticMethods_serialize_$self$$, $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$ ? $JSCompiler_StaticMethods_serialize_$self$$.$replacer_$.call($object$$7$$, $key$$inline_414$$, $value$$inline_415$$) : $value$$inline_415$$, $sb$$7$$), $sep$$inline_413$$ = 
          ",")
        }
      }
      $sb$$7$$.push("}");
      break;
    case "function":
      break;
    default:
      $JSCompiler_alias_THROW$$(Error("Unknown type: " + typeof $object$$7$$))
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$$30$$, $sb$$8$$) {
  $sb$$8$$.push('"', $s$$30$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$$2$$) {
    if($c$$2$$ in $goog$json$Serializer$charToJsonCharCache_$$) {
      return $goog$json$Serializer$charToJsonCharCache_$$[$c$$2$$]
    }
    var $cc$$2$$ = $c$$2$$.charCodeAt(0), $rv$$22$$ = "\\u";
    16 > $cc$$2$$ ? $rv$$22$$ += "000" : 256 > $cc$$2$$ ? $rv$$22$$ += "00" : 4096 > $cc$$2$$ && ($rv$$22$$ += "0");
    return $goog$json$Serializer$charToJsonCharCache_$$[$c$$2$$] = $rv$$22$$ + $cc$$2$$.toString(16)
  }), '"')
}
$goog$json$Serializer$$.prototype.serializeArray = function $$goog$json$Serializer$$$$serializeArray$($arr$$67$$, $sb$$10$$) {
  var $l$$24$$ = $arr$$67$$.length;
  $sb$$10$$.push("[");
  for(var $sep_value$$128$$ = "", $i$$141$$ = 0;$i$$141$$ < $l$$24$$;$i$$141$$++) {
    $sb$$10$$.push($sep_value$$128$$), $sep_value$$128$$ = $arr$$67$$[$i$$141$$], $JSCompiler_StaticMethods_serialize_$$(this, this.$replacer_$ ? this.$replacer_$.call($arr$$67$$, String($i$$141$$), $sep_value$$128$$) : $sep_value$$128$$, $sb$$10$$), $sep_value$$128$$ = ","
  }
  $sb$$10$$.push("]")
};
// Input 87
function $bitex$api$BitEx$$() {
  $goog$Disposable$$.call(this);
  this.$all_markets_$ = this.$currency_info_$ = $JSCompiler_alias_NULL$$;
  this.$ws_$ = new $goog$net$WebSocket$$($JSCompiler_alias_TRUE$$)
}
$goog$inherits$$($bitex$api$BitEx$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $bitex$api$BitEx$$.prototype;
$JSCompiler_prototypeAlias$$.$ws_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$url_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$connected_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$logged_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.open = function $$JSCompiler_prototypeAlias$$$open$($url$$31$$, $opt_protocol$$2$$) {
  this.$url_$ = $url$$31$$;
  var $handler$$47$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, this.$ws_$, $goog$net$WebSocket$EventType$CLOSED$$, this.$onClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, this.$ws_$, $goog$net$WebSocket$EventType$MESSAGE$$, this.$onMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, this.$ws_$, $goog$net$WebSocket$EventType$ERROR$$, this.$onError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$47$$, this.$ws_$, $goog$net$WebSocket$EventType$OPENED$$, this.$onOpen_$);
  this.$ws_$.open($url$$31$$, $opt_protocol$$2$$)
};
$JSCompiler_prototypeAlias$$.$isConnected$ = $JSCompiler_get$$("$connected_$");
$JSCompiler_prototypeAlias$$.$isLogged$ = $JSCompiler_get$$("$logged_$");
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$4$$) {
  return this.$currency_info_$[$currency_code$$4$$].$is_crypto$
};
function $JSCompiler_StaticMethods_formatCurrency$$($JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$, $amount$$, $currency_code$$5$$, $opt_human$$) {
  if($JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.$currency_info_$ == $JSCompiler_alias_NULL$$) {
    return $amount$$
  }
  $JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$ = $JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.$currency_info_$[$currency_code$$5$$];
  return($opt_human$$ != $JSCompiler_alias_NULL$$ && $opt_human$$ === $JSCompiler_alias_TRUE$$ ? new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.$human_format$, $JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.code) : new $goog$i18n$NumberFormat$$($JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.$format$, $JSCompiler_StaticMethods_formatCurrency$self_currency_def$$5$$.code)).$format$($amount$$)
}
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($msg$$15$$) {
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  $goog$array$forEach$$($msg$$15$$.Currencies, function($currency$$) {
    this.$currency_info_$[$currency$$.Code] = {code:$currency$$.Code, $format$:$currency$$.FormatJS, $human_format$:$currency$$.HumanFormatJS, description:$currency$$.Description, $sign$:$currency$$.Sign, $pip$:$currency$$.Pip, $is_crypto$:$currency$$.IsCrypto}
  }, this);
  var $symbols$$ = [];
  $goog$array$forEach$$($msg$$15$$.Instruments, function($instrument$$) {
    var $symbol$$4$$ = $instrument$$.Symbol;
    this.$all_markets_$[$symbol$$4$$] = {$symbol$:$symbol$$4$$, description:$instrument$$.Description};
    $symbols$$.push($symbol$$4$$)
  }, this)
};
$JSCompiler_prototypeAlias$$.$onOpen_$ = function $$JSCompiler_prototypeAlias$$$$onOpen_$$() {
  this.dispatchEvent("opened");
  this.$connected_$ = $JSCompiler_alias_TRUE$$;
  this.$logged_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onClose_$ = function $$JSCompiler_prototypeAlias$$$$onClose_$$() {
  this.dispatchEvent("closed");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onError_$ = function $$JSCompiler_prototypeAlias$$$$onError_$$() {
  this.dispatchEvent("error");
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$onMessage_$ = function $$JSCompiler_prototypeAlias$$$$onMessage_$$($e$$60_entry$$) {
  var $msg$$16$$ = JSON.parse($e$$60_entry$$.message);
  this.dispatchEvent(new $bitex$api$BitExEvent$$("raw_message", $e$$60_entry$$.message));
  switch($msg$$16$$.MsgType) {
    case "ERROR":
      $msg$$16$$.ReqID != $JSCompiler_alias_NULL$$ && this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message." + $msg$$16$$.ReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", $msg$$16$$));
      break;
    case "0":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("heartbeat", $msg$$16$$));
      break;
    case "B":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("news", $msg$$16$$));
      break;
    case "BF":
      if(3 == $msg$$16$$.UserReqTyp) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$("change_password_error", $msg$$16$$));
        break
      }
      1 == $msg$$16$$.UserStatus ? (this.$logged_$ = $JSCompiler_alias_TRUE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_ok", $msg$$16$$))) : (this.$logged_$ = $JSCompiler_alias_FALSE$$, this.dispatchEvent(new $bitex$api$BitExEvent$$("login_error", $msg$$16$$)));
      break;
    case "y":
      this.$onSecurityList_$($msg$$16$$);
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_list", $msg$$16$$));
      break;
    case "f":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status." + $msg$$16$$.SecurityStatusReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("security_status", $msg$$16$$));
      break;
    case "U13":
      1 == $msg$$16$$.UserStatus ? this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_ok", $msg$$16$$)) : this.dispatchEvent(new $bitex$api$BitExEvent$$("pwd_changed_error", $msg$$16$$));
      break;
    case "U19":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response." + $msg$$16$$.DepositReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_response", $msg$$16$$));
      break;
    case "U23":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_refresh." + $msg$$16$$.UserID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_refresh." + $msg$$16$$.BrokerID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_refresh", $msg$$16$$));
      break;
    case "U25":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response." + $msg$$16$$.WithdrawReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_confirmation_response", $msg$$16$$));
      break;
    case "U7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response." + $msg$$16$$.WithdrawReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_response", $msg$$16$$));
      break;
    case "U9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$16$$.UserID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh." + $msg$$16$$.BrokerID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_refresh", $msg$$16$$));
      break;
    case "U3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("balance_response", $msg$$16$$));
      break;
    case "U5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("order_list_response." + $msg$$16$$.OrdersReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("order_list_response", $msg$$16$$));
      break;
    case "U17":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("two_factor_secret", $msg$$16$$));
      break;
    case "U21":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_methods_response", $msg$$16$$));
      break;
    case "U27":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_list_response." + $msg$$16$$.WithdrawListReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("withdraw_list_response", $msg$$16$$));
      break;
    case "U29":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("broker_list", $msg$$16$$));
      break;
    case "U31":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_list." + $msg$$16$$.DepositListReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("deposit_list", $msg$$16$$));
      break;
    case "U33":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response." + $msg$$16$$.TradeHistoryReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_history_response", $msg$$16$$));
      break;
    case "U35":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list." + $msg$$16$$.LedgerListReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("ledger_list", $msg$$16$$));
      break;
    case "U37":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank." + $msg$$16$$.TradersRankReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("traders_rank", $msg$$16$$));
      break;
    case "B1":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit." + $msg$$16$$.ProcessDepositReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_deposit", $msg$$16$$));
      break;
    case "B3":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_list." + $msg$$16$$.CustomerListReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_list", $msg$$16$$));
      break;
    case "B5":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("customer_detail", $msg$$16$$));
      break;
    case "B7":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw." + $msg$$16$$.ProcessWithdrawReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("process_withdraw", $msg$$16$$));
      break;
    case "B9":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response." + $msg$$16$$.VerifyCustomerReqID, $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_response", $msg$$16$$));
      break;
    case "B11":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("verify_customer_update", $msg$$16$$));
      break;
    case "W":
      if(1 != $msg$$16$$.MarketDepth) {
        this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_clear", $msg$$16$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_clear." + $msg$$16$$.MDReqID, $msg$$16$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear", $msg$$16$$));
        this.dispatchEvent(new $bitex$api$BitExEvent$$("trade_clear." + $msg$$16$$.MDReqID, $msg$$16$$));
        for(var $x$$69$$ in $msg$$16$$.MDFullGrp) {
          switch($e$$60_entry$$ = $msg$$16$$.MDFullGrp[$x$$69$$], $e$$60_entry$$.MDReqID = $msg$$16$$.MDReqID, $e$$60_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              $e$$60_entry$$.Symbol = $msg$$16$$.Symbol;
              this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_new_order", $e$$60_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_new_order." + $msg$$16$$.MDReqID, $e$$60_entry$$));
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$60_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$16$$.MDReqID, $e$$60_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$60_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$16$$.MDReqID, $e$$60_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh", $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_full_refresh." + $msg$$16$$.MDReqID, $msg$$16$$));
      break;
    case "X":
      if("3" == $msg$$16$$.MDBkTyp) {
        for($x$$69$$ in $msg$$16$$.MDIncGrp) {
          switch($e$$60_entry$$ = $msg$$16$$.MDIncGrp[$x$$69$$], $e$$60_entry$$.MDReqID = $msg$$16$$.MDReqID, $e$$60_entry$$.MDEntryType) {
            case "0":
            ;
            case "1":
              switch($e$$60_entry$$.MDUpdateAction) {
                case "0":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_new_order", $e$$60_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_new_order." + $msg$$16$$.MDReqID, $e$$60_entry$$));
                  break;
                case "1":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_update_order", $e$$60_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_update_order." + $msg$$16$$.MDReqID, $e$$60_entry$$));
                  break;
                case "2":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_delete_order", $e$$60_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_delete_order." + $msg$$16$$.MDReqID, $e$$60_entry$$));
                  break;
                case "3":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_delete_orders_thru", $e$$60_entry$$));
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("ob_delete_orders_thru." + $msg$$16$$.MDReqID, $e$$60_entry$$));
                  break;
                case "4":
                  this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$60_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$16$$.MDReqID, $e$$60_entry$$))
              }
              break;
            case "2":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade", $e$$60_entry$$));
              this.dispatchEvent(new $bitex$api$BitExEvent$$("trade." + $msg$$16$$.MDReqID, $e$$60_entry$$));
              break;
            case "4":
              this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status", $e$$60_entry$$)), this.dispatchEvent(new $bitex$api$BitExEvent$$("md_status." + $msg$$16$$.MDReqID, $e$$60_entry$$))
          }
        }
      }
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh", $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_incremental_refresh." + $msg$$16$$.MDReqID, $msg$$16$$));
      break;
    case "Y":
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject", $msg$$16$$));
      this.dispatchEvent(new $bitex$api$BitExEvent$$("md_request_reject." + $msg$$16$$.MDReqID, $msg$$16$$));
      break;
    case "8":
      $msg$$16$$.Volume != $JSCompiler_alias_NULL$$ || ($msg$$16$$.Volume = $msg$$16$$.AvgPx != $JSCompiler_alias_NULL$$ && 0 < $msg$$16$$.AvgPx ? $msg$$16$$.CumQty * $msg$$16$$.AvgPx / 1E8 : 0), this.dispatchEvent(new $bitex$api$BitExEvent$$("execution_report", $msg$$16$$))
  }
};
$JSCompiler_prototypeAlias$$.close = function $$JSCompiler_prototypeAlias$$$close$() {
  this.$logged_$ = this.$connected_$ = $JSCompiler_alias_FALSE$$;
  this.$ws_$.close();
  this.$ws_$.$dispose$();
  this.$ws_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.login = function $$JSCompiler_prototypeAlias$$$login$($msg$$17_username$$, $password$$, $opt_second_factor$$) {
  $msg$$17_username$$ = {MsgType:"BE", UserReqID:"1", Username:$msg$$17_username$$, Password:$password$$, UserReqTyp:"1"};
  $opt_second_factor$$ != $JSCompiler_alias_NULL$$ && ($msg$$17_username$$.SecondFactor = $opt_second_factor$$);
  this.sendMessage($msg$$17_username$$)
};
function $JSCompiler_StaticMethods_sendHearBeat$$($JSCompiler_StaticMethods_sendHearBeat$self$$) {
  $JSCompiler_StaticMethods_sendHearBeat$self$$.sendMessage({MsgType:"0", TestReqID:parseInt(1E6 * Math.random(), 10), SendTime:(new Date).getTime()})
}
$JSCompiler_prototypeAlias$$.$enableTwoFactor$ = function $$JSCompiler_prototypeAlias$$$$enableTwoFactor$$($enable$$1_msg$$19$$, $opt_secret$$, $opt_code$$, $opt_clientID$$) {
  $enable$$1_msg$$19$$ = {MsgType:"U16", Enable:$enable$$1_msg$$19$$};
  $opt_secret$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_secret$$) && ($enable$$1_msg$$19$$.Secret = $opt_secret$$);
  $opt_code$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_code$$) && ($enable$$1_msg$$19$$.Code = $opt_code$$);
  $opt_clientID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$) && ($enable$$1_msg$$19$$.ClientID = $opt_clientID$$);
  this.sendMessage($enable$$1_msg$$19$$)
};
$JSCompiler_prototypeAlias$$.$forgotPassword$ = function $$JSCompiler_prototypeAlias$$$$forgotPassword$$($email$$) {
  this.sendMessage({MsgType:"U10", Email:$email$$})
};
$JSCompiler_prototypeAlias$$.$requestBalances$ = function $$JSCompiler_prototypeAlias$$$$requestBalances$$($opt_clientID$$1$$) {
  var $msg$$21$$ = {MsgType:"U2", BalanceReqID:parseInt(1E6 * Math.random(), 10)};
  $opt_clientID$$1$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$1$$) && ($msg$$21$$.ClientID = $opt_clientID$$1$$);
  this.sendMessage($msg$$21$$)
};
$JSCompiler_prototypeAlias$$.$requestWithdraw$ = function $$JSCompiler_prototypeAlias$$$$requestWithdraw$$($opt_request_id_reqId$$2$$, $JSCompiler_temp_const$$33_amount$$1$$, $method$$4_msg$$22$$, $currency$$1$$, $JSCompiler_inline_result$$36_data$$35$$, $opt_client_order_id$$) {
  $opt_request_id_reqId$$2$$ = $opt_request_id_reqId$$2$$ || parseInt(1E6 * Math.random(), 10);
  $JSCompiler_temp_const$$33_amount$$1$$ = parseInt(1E8 * $JSCompiler_temp_const$$33_amount$$1$$, 10);
  $JSCompiler_inline_result$$36_data$$35$$ = (new $goog$json$Serializer$$($JSCompiler_alias_VOID$$)).serialize($JSCompiler_inline_result$$36_data$$35$$);
  $method$$4_msg$$22$$ = {MsgType:"U6", WithdrawReqID:$opt_request_id_reqId$$2$$, Currency:$currency$$1$$, Amount:$JSCompiler_temp_const$$33_amount$$1$$, Method:$method$$4_msg$$22$$, Data:$JSCompiler_inline_result$$36_data$$35$$};
  $opt_client_order_id$$ != $JSCompiler_alias_NULL$$ && ($method$$4_msg$$22$$.ClOrdID = "" + $opt_client_order_id$$);
  this.sendMessage($method$$4_msg$$22$$);
  return $opt_request_id_reqId$$2$$
};
$JSCompiler_prototypeAlias$$.$confirmWithdraw$ = function $$JSCompiler_prototypeAlias$$$$confirmWithdraw$$($confirmation_token$$) {
  this.sendMessage({MsgType:"U24", WithdrawReqID:parseInt(1E6 * Math.random(), 10), ConfirmationToken:$confirmation_token$$})
};
$JSCompiler_prototypeAlias$$.$requestWithdrawList$ = function $$JSCompiler_prototypeAlias$$$$requestWithdrawList$$($opt_requestId_requestId$$, $msg$$24_opt_page$$, $opt_limit$$1$$, $opt_status$$, $opt_clientID$$2$$, $opt_filter$$) {
  $opt_requestId_requestId$$ = $opt_requestId_requestId$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$24_opt_page$$ = {MsgType:"U26", WithdrawListReqID:$opt_requestId_requestId$$, Page:$msg$$24_opt_page$$ || 0, PageSize:$opt_limit$$1$$ || 100, StatusList:$opt_status$$ || ["1", "2"]};
  $opt_clientID$$2$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$2$$) && ($msg$$24_opt_page$$.ClientID = $opt_clientID$$2$$);
  $opt_filter$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$.length && ($msg$$24_opt_page$$.Filter = $opt_filter$$);
  this.sendMessage($msg$$24_opt_page$$);
  return $opt_requestId_requestId$$
};
$JSCompiler_prototypeAlias$$.$requestDepositList$ = function $$JSCompiler_prototypeAlias$$$$requestDepositList$$($opt_requestId$$2_requestId$$2$$, $msg$$26_opt_page$$1$$, $opt_limit$$2$$, $opt_status$$1$$, $opt_clientID$$3$$, $opt_filter$$1$$) {
  $opt_requestId$$2_requestId$$2$$ = $opt_requestId$$2_requestId$$2$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$26_opt_page$$1$$ = {MsgType:"U30", DepositListReqID:$opt_requestId$$2_requestId$$2$$, Page:$msg$$26_opt_page$$1$$ || 0, PageSize:$opt_limit$$2$$ || 100, StatusList:$opt_status$$1$$ || ["1", "2"]};
  $opt_clientID$$3$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$3$$) && ($msg$$26_opt_page$$1$$.ClientID = $opt_clientID$$3$$);
  $opt_filter$$1$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$1$$.length && ($msg$$26_opt_page$$1$$.Filter = $opt_filter$$1$$);
  this.sendMessage($msg$$26_opt_page$$1$$);
  return $opt_requestId$$2_requestId$$2$$
};
$JSCompiler_prototypeAlias$$.$requestLedgerList$ = function $$JSCompiler_prototypeAlias$$$$requestLedgerList$$($opt_requestId$$5_requestId$$5$$, $msg$$29_opt_page$$4$$, $opt_limit$$5$$, $opt_brokerID$$, $opt_clientID$$6$$, $opt_currency$$1$$, $opt_filter$$4$$) {
  $opt_requestId$$5_requestId$$5$$ = $opt_requestId$$5_requestId$$5$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$29_opt_page$$4$$ = {MsgType:"U34", LedgerListReqID:$opt_requestId$$5_requestId$$5$$, OperationList:["C", "D"], Page:$msg$$29_opt_page$$4$$ || 0, PageSize:$opt_limit$$5$$ || 100};
  $opt_brokerID$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_brokerID$$) && ($msg$$29_opt_page$$4$$.BrokerID = $opt_brokerID$$);
  $opt_clientID$$6$$ != $JSCompiler_alias_NULL$$ && $goog$isNumber$$($opt_clientID$$6$$) && ($msg$$29_opt_page$$4$$.ClientID = $opt_clientID$$6$$);
  $opt_currency$$1$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_currency$$1$$) && ($msg$$29_opt_page$$4$$.Currency = $opt_currency$$1$$);
  $opt_filter$$4$$ != $JSCompiler_alias_NULL$$ && 0 < $opt_filter$$4$$.length && ($msg$$29_opt_page$$4$$.Filter = $opt_filter$$4$$);
  this.sendMessage($msg$$29_opt_page$$4$$);
  return $opt_requestId$$5_requestId$$5$$
};
$JSCompiler_prototypeAlias$$.$requestBrokerList$ = function $$JSCompiler_prototypeAlias$$$$requestBrokerList$$($opt_requestId$$6_requestId$$6$$, $opt_country$$, $msg$$30_opt_page$$5$$, $opt_limit$$6$$, $opt_status$$2$$) {
  $opt_requestId$$6_requestId$$6$$ = $opt_requestId$$6_requestId$$6$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$30_opt_page$$5$$ = {MsgType:"U28", BrokerListReqID:$opt_requestId$$6_requestId$$6$$, Page:$msg$$30_opt_page$$5$$ || 0, PageSize:$opt_limit$$6$$ || 100, StatusList:$opt_status$$2$$ || ["1"]};
  $opt_country$$ != $JSCompiler_alias_NULL$$ && ($msg$$30_opt_page$$5$$.Country = $opt_country$$);
  this.sendMessage($msg$$30_opt_page$$5$$);
  return $opt_requestId$$6_requestId$$6$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerList$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerList$$($opt_requestId$$7_requestId$$7$$, $opt_filter_country$$, $opt_filter_state$$, $opt_filter_username_or_email$$, $msg$$31_opt_page$$6$$, $opt_limit$$7$$, $opt_status$$3$$, $opt_sort_column$$, $opt_sort_direction$$) {
  $opt_requestId$$7_requestId$$7$$ = $opt_requestId$$7_requestId$$7$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$31_opt_page$$6$$ = {MsgType:"B2", CustomerListReqID:$opt_requestId$$7_requestId$$7$$, Page:$msg$$31_opt_page$$6$$ || 0, PageSize:$opt_limit$$7$$ || 100, StatusList:$opt_status$$3$$ || [0, 1, 2]};
  $opt_filter_country$$ != $JSCompiler_alias_NULL$$ && ($msg$$31_opt_page$$6$$.Country = $opt_filter_country$$);
  $opt_filter_state$$ != $JSCompiler_alias_NULL$$ && ($msg$$31_opt_page$$6$$.State = $opt_filter_state$$);
  $opt_filter_username_or_email$$ != $JSCompiler_alias_NULL$$ && ($msg$$31_opt_page$$6$$.ClientID = $opt_filter_username_or_email$$);
  $opt_sort_column$$ != $JSCompiler_alias_NULL$$ && ($msg$$31_opt_page$$6$$.Sort = $opt_sort_column$$);
  $opt_sort_direction$$ != $JSCompiler_alias_NULL$$ && ($msg$$31_opt_page$$6$$.SortOrder = $opt_sort_direction$$);
  this.sendMessage($msg$$31_opt_page$$6$$);
  return $opt_requestId$$7_requestId$$7$$
};
$JSCompiler_prototypeAlias$$.$requestCustomerDetails$ = function $$JSCompiler_prototypeAlias$$$$requestCustomerDetails$$($opt_requestId$$8$$, $clientId$$) {
  var $requestId$$8$$ = $opt_requestId$$8$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"B4", CustomerReqID:$requestId$$8$$, ClientID:$clientId$$});
  return $requestId$$8$$
};
$JSCompiler_prototypeAlias$$.$verifyCustomer$ = function $$JSCompiler_prototypeAlias$$$$verifyCustomer$$($opt_requestId$$9_requestId$$9$$, $clientId$$1$$, $verify$$, $verificationData$$) {
  $opt_requestId$$9_requestId$$9$$ = $opt_requestId$$9_requestId$$9$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"B8", VerifyCustomerReqID:$opt_requestId$$9_requestId$$9$$, ClientID:$clientId$$1$$, Verify:$verify$$, VerificationData:$verificationData$$});
  return $opt_requestId$$9_requestId$$9$$
};
$JSCompiler_prototypeAlias$$.$processWithdraw$ = function $$JSCompiler_prototypeAlias$$$$processWithdraw$$($opt_requestId$$10_requestId$$10$$, $action_msg$$34$$, $withdrawId$$, $opt_reasonId$$, $opt_reason$$, $opt_data$$4$$, $opt_percent_fee$$, $opt_fixed_fee$$) {
  $opt_requestId$$10_requestId$$10$$ = $opt_requestId$$10_requestId$$10$$ || parseInt(1E7 * Math.random(), 10);
  $action_msg$$34$$ = {MsgType:"B6", ProcessWithdrawReqID:$opt_requestId$$10_requestId$$10$$, WithdrawID:$withdrawId$$, Action:$action_msg$$34$$};
  $opt_reasonId$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$34$$.ReasonID = $opt_reasonId$$);
  $opt_reason$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$34$$.Reason = $opt_reason$$);
  $opt_data$$4$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$34$$.Data = $opt_data$$4$$);
  $opt_percent_fee$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$34$$.PercentFee = $opt_percent_fee$$);
  $opt_fixed_fee$$ != $JSCompiler_alias_NULL$$ && ($action_msg$$34$$.FixedFee = $opt_fixed_fee$$);
  this.sendMessage($action_msg$$34$$);
  return $opt_requestId$$10_requestId$$10$$
};
$JSCompiler_prototypeAlias$$.$processDeposit$ = function $$JSCompiler_prototypeAlias$$$$processDeposit$$($opt_requestId$$11_requestId$$11$$, $action$$1_msg$$35$$, $opt_secret$$1$$, $opt_depositId$$, $opt_reasonId$$1$$, $opt_reason$$1$$, $opt_amount$$, $opt_percent_fee$$1$$, $opt_fixed_fee$$1$$) {
  $opt_requestId$$11_requestId$$11$$ = $opt_requestId$$11_requestId$$11$$ || parseInt(1E7 * Math.random(), 10);
  $action$$1_msg$$35$$ = {MsgType:"B0", ProcessDepositReqID:$opt_requestId$$11_requestId$$11$$, Action:$action$$1_msg$$35$$};
  $opt_secret$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.Secret = $opt_secret$$1$$);
  $opt_depositId$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.DepositID = $opt_depositId$$);
  $opt_reasonId$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.ReasonID = $opt_reasonId$$1$$);
  $opt_reason$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.Reason = $opt_reason$$1$$);
  $opt_amount$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.Amount = $opt_amount$$);
  $opt_percent_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.PercentFee = $opt_percent_fee$$1$$);
  $opt_fixed_fee$$1$$ != $JSCompiler_alias_NULL$$ && ($action$$1_msg$$35$$.FixedFee = $opt_fixed_fee$$1$$);
  this.sendMessage($action$$1_msg$$35$$);
  return $opt_requestId$$11_requestId$$11$$
};
$JSCompiler_prototypeAlias$$.$resetPassword$ = function $$JSCompiler_prototypeAlias$$$$resetPassword$$($token$$7$$, $new_password$$) {
  this.sendMessage({MsgType:"U12", Token:$token$$7$$, NewPassword:$new_password$$})
};
$JSCompiler_prototypeAlias$$.$changePassword$ = function $$JSCompiler_prototypeAlias$$$$changePassword$$($msg$$37_username$$1$$, $password$$1$$, $new_password$$1$$, $opt_second_factor$$1$$, $opt_requestId$$12$$) {
  $msg$$37_username$$1$$ = {MsgType:"BE", UserReqID:$opt_requestId$$12$$ || parseInt(1E7 * Math.random(), 10), UserReqTyp:"3", Username:$msg$$37_username$$1$$, Password:$password$$1$$, NewPassword:$new_password$$1$$};
  $opt_second_factor$$1$$ != $JSCompiler_alias_NULL$$ && ($msg$$37_username$$1$$.SecondFactor = $opt_second_factor$$1$$);
  this.sendMessage($msg$$37_username$$1$$)
};
$JSCompiler_prototypeAlias$$.$subscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$subscribeMarketData$$($market_depth$$, $symbols$$1$$, $entries$$, $opt_requestId$$13_requestId$$13$$) {
  $opt_requestId$$13_requestId$$13$$ = $opt_requestId$$13_requestId$$13$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"V", MDReqID:$opt_requestId$$13_requestId$$13$$, SubscriptionRequestType:"1", MarketDepth:$market_depth$$, MDUpdateType:"1", MDEntryTypes:$entries$$, Instruments:$symbols$$1$$});
  return $opt_requestId$$13_requestId$$13$$
};
$JSCompiler_prototypeAlias$$.$unSubscribeMarketData$ = function $$JSCompiler_prototypeAlias$$$$unSubscribeMarketData$$($market_data_id$$) {
  this.sendMessage({MsgType:"V", MDReqID:$market_data_id$$, MarketDepth:0, SubscriptionRequestType:"2"})
};
$JSCompiler_prototypeAlias$$.$requestSecurityList$ = function $$JSCompiler_prototypeAlias$$$$requestSecurityList$$($opt_requestId$$15$$) {
  this.sendMessage({MsgType:"x", SecurityReqID:$opt_requestId$$15$$ || parseInt(1E7 * Math.random(), 10), SecurityListRequestType:0, SecurityRequestResult:0})
};
$JSCompiler_prototypeAlias$$.$signUp$ = function $$JSCompiler_prototypeAlias$$$$signUp$$($username$$2$$, $password$$2$$, $email$$1$$, $state$$2$$, $country_code$$, $broker$$) {
  this.sendMessage({MsgType:"U0", Username:$username$$2$$, Password:$password$$2$$, Email:$email$$1$$, State:$state$$2$$, CountryCode:$country_code$$, BrokerID:$broker$$})
};
$JSCompiler_prototypeAlias$$.$requestOrderList$ = function $$JSCompiler_prototypeAlias$$$$requestOrderList$$($opt_requestId$$16_requestId$$16$$, $opt_page$$7$$, $opt_limit$$8$$, $opt_status$$4$$) {
  $opt_requestId$$16_requestId$$16$$ = $opt_requestId$$16_requestId$$16$$ || parseInt(1E7 * Math.random(), 10);
  this.sendMessage({MsgType:"U4", OrdersReqID:$opt_requestId$$16_requestId$$16$$, Page:$opt_page$$7$$ || 0, PageSize:$opt_limit$$8$$ || 100, StatusList:$opt_status$$4$$ || ["0", "1"]});
  return $opt_requestId$$16_requestId$$16$$
};
$JSCompiler_prototypeAlias$$.$requestDeposit$ = function $$JSCompiler_prototypeAlias$$$$requestDeposit$$($msg$$45_opt_requestId$$17$$, $opt_depositOptionId$$, $opt_value$$10$$, $opt_depositID$$, $opt_currency$$2$$, $opt_client_order_id$$1$$) {
  $msg$$45_opt_requestId$$17$$ = {MsgType:"U18", DepositReqID:$msg$$45_opt_requestId$$17$$ || parseInt(1E7 * Math.random(), 10)};
  $opt_depositOptionId$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_requestId$$17$$.DepositMethodID = $opt_depositOptionId$$);
  $opt_value$$10$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_requestId$$17$$.Value = parseInt(1E8 * $opt_value$$10$$, 10));
  $opt_depositID$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_requestId$$17$$.DepositID = $opt_depositID$$);
  $opt_currency$$2$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_requestId$$17$$.Currency = $opt_currency$$2$$);
  $opt_client_order_id$$1$$ != $JSCompiler_alias_NULL$$ && ($msg$$45_opt_requestId$$17$$.ClOrdID = "" + $opt_client_order_id$$1$$);
  this.sendMessage($msg$$45_opt_requestId$$17$$)
};
$JSCompiler_prototypeAlias$$.$requestDepositMethods$ = function $$JSCompiler_prototypeAlias$$$$requestDepositMethods$$($opt_requestId$$18$$) {
  this.sendMessage({MsgType:"U20", DepositMethodReqID:$opt_requestId$$18$$ || parseInt(1E7 * Math.random(), 10)})
};
function $JSCompiler_StaticMethods_sendOrder_$$($JSCompiler_StaticMethods_sendOrder_$self$$, $msg$$47_symbol$$5$$, $qty$$, $price$$, $side$$, $broker_id$$, $opt_client_id$$, $clientOrderId_opt_clientOrderId$$) {
  $clientOrderId_opt_clientOrderId$$ = $clientOrderId_opt_clientOrderId$$ || parseInt(1E7 * Math.random(), 10);
  $msg$$47_symbol$$5$$ = {MsgType:"D", ClOrdID:"" + $clientOrderId_opt_clientOrderId$$, Symbol:$msg$$47_symbol$$5$$, Side:$side$$, OrdType:"2", Price:$price$$, OrderQty:$qty$$, BrokerID:$broker_id$$};
  $opt_client_id$$ != $JSCompiler_alias_NULL$$ && !$goog$string$isEmpty$$($opt_client_id$$) && ($msg$$47_symbol$$5$$.ClientID = $opt_client_id$$);
  $JSCompiler_StaticMethods_sendOrder_$self$$.sendMessage($msg$$47_symbol$$5$$);
  return $clientOrderId_opt_clientOrderId$$
}
$JSCompiler_prototypeAlias$$.$cancelOrder$ = function $$JSCompiler_prototypeAlias$$$$cancelOrder$$($opt_clientOrderId$$1$$, $opt_OrderId$$) {
  var $msg$$48$$ = {MsgType:"F"};
  $opt_OrderId$$ ? $msg$$48$$.OrderID = $opt_OrderId$$ : $opt_clientOrderId$$1$$ && ($msg$$48$$.OrigClOrdID = $opt_clientOrderId$$1$$);
  this.sendMessage($msg$$48$$)
};
$JSCompiler_prototypeAlias$$.$sendRawMessage$ = function $$JSCompiler_prototypeAlias$$$$sendRawMessage$$($msg$$49$$) {
  if(this.$ws_$.$isOpen$()) {
    try {
      this.$ws_$.send($msg$$49$$), this.dispatchEvent(new $bitex$api$BitExEvent$$("sent_raw_message", $msg$$49$$))
    }catch($s$$31$$) {
      this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Exception", Detail:$s$$31$$.toLocaleString()}))
    }
  }else {
    this.dispatchEvent(new $bitex$api$BitExEvent$$("error_message", {MsgType:"ERROR", Description:"Error", Detail:"Not connected to the server"}))
  }
};
$JSCompiler_prototypeAlias$$.sendMessage = function $$JSCompiler_prototypeAlias$$$sendMessage$($msg$$50$$) {
  this.$sendRawMessage$(JSON.stringify($msg$$50$$))
};
$JSCompiler_prototypeAlias$$.$sendBuyLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendBuyLimitedOrder$$($symbol$$6$$, $qty$$1$$, $price$$1$$, $broker_id$$1$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$6$$, $qty$$1$$, $price$$1$$, "1", $broker_id$$1$$, $opt_client_id$$1$$, $opt_clientOrderId$$2$$)
};
$JSCompiler_prototypeAlias$$.$sendSellLimitedOrder$ = function $$JSCompiler_prototypeAlias$$$$sendSellLimitedOrder$$($symbol$$7$$, $qty$$2$$, $price$$2$$, $broker_id$$2$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$) {
  return $JSCompiler_StaticMethods_sendOrder_$$(this, $symbol$$7$$, $qty$$2$$, $price$$2$$, "2", $broker_id$$2$$, $opt_client_id$$2$$, $opt_clientOrderId$$3$$)
};
$JSCompiler_prototypeAlias$$.$testRequest$ = function $$JSCompiler_prototypeAlias$$$$testRequest$$() {
  this.sendMessage({MsgType:"1", TestReqID:Math.random()})
};
function $bitex$api$BitExEvent$$($type$$99$$, $opt_data$$5$$) {
  $goog$events$Event$$.call(this, $type$$99$$);
  this.data = $opt_data$$5$$
}
$goog$inherits$$($bitex$api$BitExEvent$$, $goog$events$Event$$);
$goog$exportPath_$$("BitEx", $bitex$api$BitEx$$);
BitEx.prototype.open = $bitex$api$BitEx$$.prototype.open;
BitEx.prototype.close = $bitex$api$BitEx$$.prototype.close;
BitEx.prototype.login = $bitex$api$BitEx$$.prototype.login;
BitEx.prototype.isLogged = $bitex$api$BitEx$$.prototype.$isLogged$;
BitEx.prototype.isConnected = $bitex$api$BitEx$$.prototype.$isConnected$;
BitEx.prototype.changePassword = $bitex$api$BitEx$$.prototype.$changePassword$;
BitEx.prototype.enableTwoFactor = $bitex$api$BitEx$$.prototype.$enableTwoFactor$;
BitEx.prototype.resetPassword = $bitex$api$BitEx$$.prototype.$resetPassword$;
BitEx.prototype.subscribeMarketData = $bitex$api$BitEx$$.prototype.$subscribeMarketData$;
BitEx.prototype.unSubscribeMarketData = $bitex$api$BitEx$$.prototype.$unSubscribeMarketData$;
BitEx.prototype.signUp = $bitex$api$BitEx$$.prototype.$signUp$;
BitEx.prototype.forgotPassword = $bitex$api$BitEx$$.prototype.$forgotPassword$;
BitEx.prototype.requestBalances = $bitex$api$BitEx$$.prototype.$requestBalances$;
BitEx.prototype.requestSecurityList = $bitex$api$BitEx$$.prototype.$requestSecurityList$;
BitEx.prototype.requestDepositMethods = $bitex$api$BitEx$$.prototype.$requestDepositMethods$;
BitEx.prototype.requestLedgerList = $bitex$api$BitEx$$.prototype.$requestLedgerList$;
BitEx.prototype.requestDeposit = $bitex$api$BitEx$$.prototype.$requestDeposit$;
BitEx.prototype.processDeposit = $bitex$api$BitEx$$.prototype.$processDeposit$;
BitEx.prototype.requestDepositList = $bitex$api$BitEx$$.prototype.$requestDepositList$;
BitEx.prototype.requestWithdraw = $bitex$api$BitEx$$.prototype.$requestWithdraw$;
BitEx.prototype.processWithdraw = $bitex$api$BitEx$$.prototype.$processWithdraw$;
BitEx.prototype.requestWithdrawList = $bitex$api$BitEx$$.prototype.$requestWithdrawList$;
BitEx.prototype.confirmWithdraw = $bitex$api$BitEx$$.prototype.$confirmWithdraw$;
BitEx.prototype.requestCustomerList = $bitex$api$BitEx$$.prototype.$requestCustomerList$;
BitEx.prototype.requestCustomerDetails = $bitex$api$BitEx$$.prototype.$requestCustomerDetails$;
BitEx.prototype.verifyCustomer = $bitex$api$BitEx$$.prototype.$verifyCustomer$;
BitEx.prototype.requestBrokerList = $bitex$api$BitEx$$.prototype.$requestBrokerList$;
BitEx.prototype.requestOrderList = $bitex$api$BitEx$$.prototype.$requestOrderList$;
BitEx.prototype.cancelOrder = $bitex$api$BitEx$$.prototype.$cancelOrder$;
BitEx.prototype.sendRawMessage = $bitex$api$BitEx$$.prototype.$sendRawMessage$;
BitEx.prototype.sendBuyLimitedOrder = $bitex$api$BitEx$$.prototype.$sendBuyLimitedOrder$;
BitEx.prototype.sendSellLimitedOrder = $bitex$api$BitEx$$.prototype.$sendSellLimitedOrder$;
BitEx.prototype.testRequest = $bitex$api$BitEx$$.prototype.$testRequest$;
BitEx.prototype.addEventListener = $bitex$api$BitEx$$.prototype.addEventListener;
BitEx.prototype.removeEventListener = $bitex$api$BitEx$$.prototype.removeEventListener;
// Input 88
// Input 89
// Input 90
// Input 91
// Input 92
function $goog$math$Long$$($low$$1$$, $high$$1$$) {
  this.$low_$ = $low$$1$$ | 0;
  this.$high_$ = $high$$1$$ | 0
}
var $goog$math$Long$IntCache_$$ = {};
function $goog$math$Long$fromInt$$($value$$130$$) {
  if(-128 <= $value$$130$$ && 128 > $value$$130$$) {
    var $cachedObj_obj$$98$$ = $goog$math$Long$IntCache_$$[$value$$130$$];
    if($cachedObj_obj$$98$$) {
      return $cachedObj_obj$$98$$
    }
  }
  $cachedObj_obj$$98$$ = new $goog$math$Long$$($value$$130$$ | 0, 0 > $value$$130$$ ? -1 : 0);
  -128 <= $value$$130$$ && 128 > $value$$130$$ && ($goog$math$Long$IntCache_$$[$value$$130$$] = $cachedObj_obj$$98$$);
  return $cachedObj_obj$$98$$
}
function $goog$math$Long$fromNumber$$($value$$131$$) {
  return isNaN($value$$131$$) || !isFinite($value$$131$$) ? $goog$math$Long$ZERO$$ : $value$$131$$ <= -$goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MIN_VALUE$$ : $value$$131$$ + 1 >= $goog$math$Long$TWO_PWR_63_DBL_$$ ? $goog$math$Long$MAX_VALUE$$ : 0 > $value$$131$$ ? $JSCompiler_StaticMethods_negate$$($goog$math$Long$fromNumber$$(-$value$$131$$)) : new $goog$math$Long$$($value$$131$$ % $goog$math$Long$TWO_PWR_32_DBL_$$ | 0, $value$$131$$ / $goog$math$Long$TWO_PWR_32_DBL_$$ | 0)
}
var $goog$math$Long$TWO_PWR_32_DBL_$$ = 4294967296, $goog$math$Long$TWO_PWR_63_DBL_$$ = $goog$math$Long$TWO_PWR_32_DBL_$$ * $goog$math$Long$TWO_PWR_32_DBL_$$ / 2, $goog$math$Long$ZERO$$ = $goog$math$Long$fromInt$$(0), $goog$math$Long$ONE$$ = $goog$math$Long$fromInt$$(1), $goog$math$Long$NEG_ONE$$ = $goog$math$Long$fromInt$$(-1), $goog$math$Long$MAX_VALUE$$ = new $goog$math$Long$$(-1, 2147483647), $goog$math$Long$MIN_VALUE$$ = new $goog$math$Long$$(0, -2147483648), $goog$math$Long$TWO_PWR_24_$$ = 
$goog$math$Long$fromInt$$(16777216);
$JSCompiler_prototypeAlias$$ = $goog$math$Long$$.prototype;
$JSCompiler_prototypeAlias$$.toString = function $$JSCompiler_prototypeAlias$$$toString$($opt_radix$$2_radix$$1$$) {
  $opt_radix$$2_radix$$1$$ = $opt_radix$$2_radix$$1$$ || 10;
  (2 > $opt_radix$$2_radix$$1$$ || 36 < $opt_radix$$2_radix$$1$$) && $JSCompiler_alias_THROW$$(Error("radix out of range: " + $opt_radix$$2_radix$$1$$));
  if($JSCompiler_StaticMethods_isZero$$(this)) {
    return"0"
  }
  if(0 > this.$high_$) {
    if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
      var $radixLong_rem$$ = $goog$math$Long$fromNumber$$($opt_radix$$2_radix$$1$$), $div$$2_radixToPower$$1$$ = $JSCompiler_StaticMethods_div$$(this, $radixLong_rem$$), $radixLong_rem$$ = $JSCompiler_StaticMethods_subtract$$($div$$2_radixToPower$$1$$.multiply($radixLong_rem$$), this);
      return $div$$2_radixToPower$$1$$.toString($opt_radix$$2_radix$$1$$) + $radixLong_rem$$.$low_$.toString($opt_radix$$2_radix$$1$$)
    }
    return"-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$$2_radix$$1$$)
  }
  for(var $div$$2_radixToPower$$1$$ = $goog$math$Long$fromNumber$$(Math.pow($opt_radix$$2_radix$$1$$, 6)), $radixLong_rem$$ = this, $result$$21$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_div$$($radixLong_rem$$, $div$$2_radixToPower$$1$$), $digits$$ = $JSCompiler_StaticMethods_subtract$$($radixLong_rem$$, $remDiv$$.multiply($div$$2_radixToPower$$1$$)).$low_$.toString($opt_radix$$2_radix$$1$$), $radixLong_rem$$ = $remDiv$$;
    if($JSCompiler_StaticMethods_isZero$$($radixLong_rem$$)) {
      return $digits$$ + $result$$21$$
    }
    for(;6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$
    }
    $result$$21$$ = "" + $digits$$ + $result$$21$$
  }
};
function $JSCompiler_StaticMethods_getLowBitsUnsigned$$($JSCompiler_StaticMethods_getLowBitsUnsigned$self$$) {
  return 0 <= $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ ? $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$ : $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$self$$.$low_$
}
function $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_isZero$self$$) {
  return 0 == $JSCompiler_StaticMethods_isZero$self$$.$high_$ && 0 == $JSCompiler_StaticMethods_isZero$self$$.$low_$
}
$JSCompiler_prototypeAlias$$.$equals$ = function $$JSCompiler_prototypeAlias$$$$equals$$($other$$6$$) {
  return this.$high_$ == $other$$6$$.$high_$ && this.$low_$ == $other$$6$$.$low_$
};
function $JSCompiler_StaticMethods_compare$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$) {
  if($JSCompiler_StaticMethods_compare$self$$.$equals$($other$$12$$)) {
    return 0
  }
  var $thisNeg$$ = 0 > $JSCompiler_StaticMethods_compare$self$$.$high_$, $otherNeg$$ = 0 > $other$$12$$.$high_$;
  return $thisNeg$$ && !$otherNeg$$ ? -1 : !$thisNeg$$ && $otherNeg$$ ? 1 : 0 > $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_compare$self$$, $other$$12$$).$high_$ ? -1 : 1
}
function $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$self$$) {
  return $JSCompiler_StaticMethods_negate$self$$.$equals$($goog$math$Long$MIN_VALUE$$) ? $goog$math$Long$MIN_VALUE$$ : $JSCompiler_StaticMethods_negate$self$$.not().add($goog$math$Long$ONE$$)
}
$JSCompiler_prototypeAlias$$.add = function $$JSCompiler_prototypeAlias$$$add$($c16_other$$13$$) {
  var $a48$$ = this.$high_$ >>> 16, $a32_c48$$ = this.$high_$ & 65535, $a16_c32$$ = this.$low_$ >>> 16, $b48$$ = $c16_other$$13$$.$high_$ >>> 16, $b32$$ = $c16_other$$13$$.$high_$ & 65535, $b16$$ = $c16_other$$13$$.$low_$ >>> 16, $c00$$;
  $c00$$ = 0 + ((this.$low_$ & 65535) + ($c16_other$$13$$.$low_$ & 65535));
  $c16_other$$13$$ = 0 + ($c00$$ >>> 16);
  $c16_other$$13$$ += $a16_c32$$ + $b16$$;
  $a16_c32$$ = 0 + ($c16_other$$13$$ >>> 16);
  $a16_c32$$ += $a32_c48$$ + $b32$$;
  $a32_c48$$ = 0 + ($a16_c32$$ >>> 16);
  $a32_c48$$ = $a32_c48$$ + ($a48$$ + $b48$$) & 65535;
  return new $goog$math$Long$$(($c16_other$$13$$ & 65535) << 16 | $c00$$ & 65535, $a32_c48$$ << 16 | $a16_c32$$ & 65535)
};
function $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_subtract$self$$, $other$$14$$) {
  return $JSCompiler_StaticMethods_subtract$self$$.add($JSCompiler_StaticMethods_negate$$($other$$14$$))
}
$JSCompiler_prototypeAlias$$.multiply = function $$JSCompiler_prototypeAlias$$$multiply$($b00$$1_other$$15$$) {
  if($JSCompiler_StaticMethods_isZero$$(this) || $JSCompiler_StaticMethods_isZero$$($b00$$1_other$$15$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(this.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == ($b00$$1_other$$15$$.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if($b00$$1_other$$15$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return 1 == (this.$low_$ & 1) ? $goog$math$Long$MIN_VALUE$$ : $goog$math$Long$ZERO$$
  }
  if(0 > this.$high_$) {
    return 0 > $b00$$1_other$$15$$.$high_$ ? $JSCompiler_StaticMethods_negate$$(this).multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$$(this).multiply($b00$$1_other$$15$$))
  }
  if(0 > $b00$$1_other$$15$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$(this.multiply($JSCompiler_StaticMethods_negate$$($b00$$1_other$$15$$)))
  }
  if(0 > $JSCompiler_StaticMethods_compare$$(this, $goog$math$Long$TWO_PWR_24_$$) && 0 > $JSCompiler_StaticMethods_compare$$($b00$$1_other$$15$$, $goog$math$Long$TWO_PWR_24_$$)) {
    return $goog$math$Long$fromNumber$$((this.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$(this)) * ($b00$$1_other$$15$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($b00$$1_other$$15$$)))
  }
  var $a48$$1$$ = this.$high_$ >>> 16, $a32$$1$$ = this.$high_$ & 65535, $a16$$1$$ = this.$low_$ >>> 16, $a00$$1$$ = this.$low_$ & 65535, $b48$$1$$ = $b00$$1_other$$15$$.$high_$ >>> 16, $b32$$1$$ = $b00$$1_other$$15$$.$high_$ & 65535, $b16$$1$$ = $b00$$1_other$$15$$.$low_$ >>> 16;
  $b00$$1_other$$15$$ = $b00$$1_other$$15$$.$low_$ & 65535;
  var $c48$$1$$, $c32$$1$$, $c16$$1$$, $c00$$1$$;
  $c00$$1$$ = 0 + $a00$$1$$ * $b00$$1_other$$15$$;
  $c16$$1$$ = 0 + ($c00$$1$$ >>> 16);
  $c16$$1$$ += $a16$$1$$ * $b00$$1_other$$15$$;
  $c32$$1$$ = 0 + ($c16$$1$$ >>> 16);
  $c16$$1$$ = ($c16$$1$$ & 65535) + $a00$$1$$ * $b16$$1$$;
  $c32$$1$$ += $c16$$1$$ >>> 16;
  $c16$$1$$ &= 65535;
  $c32$$1$$ += $a32$$1$$ * $b00$$1_other$$15$$;
  $c48$$1$$ = 0 + ($c32$$1$$ >>> 16);
  $c32$$1$$ = ($c32$$1$$ & 65535) + $a16$$1$$ * $b16$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c32$$1$$ += $a00$$1$$ * $b32$$1$$;
  $c48$$1$$ += $c32$$1$$ >>> 16;
  $c32$$1$$ &= 65535;
  $c48$$1$$ = $c48$$1$$ + ($a48$$1$$ * $b00$$1_other$$15$$ + $a32$$1$$ * $b16$$1$$ + $a16$$1$$ * $b32$$1$$ + $a00$$1$$ * $b48$$1$$) & 65535;
  return new $goog$math$Long$$($c16$$1$$ << 16 | $c00$$1$$ & 65535, $c48$$1$$ << 16 | $c32$$1$$)
};
function $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$) {
  $JSCompiler_StaticMethods_isZero$$($other$$16$$) && $JSCompiler_alias_THROW$$(Error("division by zero"));
  if($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_div$self$$)) {
    return $goog$math$Long$ZERO$$
  }
  if($JSCompiler_StaticMethods_div$self$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    if($other$$16$$.$equals$($goog$math$Long$ONE$$) || $other$$16$$.$equals$($goog$math$Long$NEG_ONE$$)) {
      return $goog$math$Long$MIN_VALUE$$
    }
    if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
      return $goog$math$Long$ONE$$
    }
    var $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$;
    $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ = 1;
    if(0 == $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$) {
      $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ = $JSCompiler_StaticMethods_div$self$$
    }else {
      var $high$$inline_571_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$.$high_$;
      $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ = 32 > $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ ? new $goog$math$Long$$($JSCompiler_StaticMethods_div$self$$.$low_$ >>> $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ | $high$$inline_571_rem$$1$$ << 32 - $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$, $high$$inline_571_rem$$1$$ >> $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$) : new $goog$math$Long$$($high$$inline_571_rem$$1$$ >> 
      $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ - 32, 0 <= $high$$inline_571_rem$$1$$ ? 0 : -1)
    }
    $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ = $JSCompiler_StaticMethods_div$$($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$, $other$$16$$).shiftLeft(1);
    if($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$.$equals$($goog$math$Long$ZERO$$)) {
      return 0 > $other$$16$$.$high_$ ? $goog$math$Long$ONE$$ : $goog$math$Long$NEG_ONE$$
    }
    $high$$inline_571_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_div$self$$, $other$$16$$.multiply($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$));
    return $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$.add($JSCompiler_StaticMethods_div$$($high$$inline_571_rem$$1$$, $other$$16$$))
  }
  if($other$$16$$.$equals$($goog$math$Long$MIN_VALUE$$)) {
    return $goog$math$Long$ZERO$$
  }
  if(0 > $JSCompiler_StaticMethods_div$self$$.$high_$) {
    return 0 > $other$$16$$.$high_$ ? $JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $JSCompiler_StaticMethods_negate$$($other$$16$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$self$$), $other$$16$$))
  }
  if(0 > $other$$16$$.$high_$) {
    return $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_div$$($JSCompiler_StaticMethods_div$self$$, $JSCompiler_StaticMethods_negate$$($other$$16$$)))
  }
  for(var $res$$7$$ = $goog$math$Long$ZERO$$, $high$$inline_571_rem$$1$$ = $JSCompiler_StaticMethods_div$self$$;0 <= $JSCompiler_StaticMethods_compare$$($high$$inline_571_rem$$1$$, $other$$16$$);) {
    $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ = Math.max(1, Math.floor(($high$$inline_571_rem$$1$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($high$$inline_571_rem$$1$$)) / ($other$$16$$.$high_$ * $goog$math$Long$TWO_PWR_32_DBL_$$ + $JSCompiler_StaticMethods_getLowBitsUnsigned$$($other$$16$$))));
    for(var $delta$$2_log2$$ = Math.ceil(Math.log($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$) / Math.LN2), $delta$$2_log2$$ = 48 >= $delta$$2_log2$$ ? 1 : Math.pow(2, $delta$$2_log2$$ - 48), $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$);0 > $approxRem$$.$high_$ || 0 < $JSCompiler_StaticMethods_compare$$($approxRem$$, $high$$inline_571_rem$$1$$);) {
      $JSCompiler_inline_result$$16_approx_numBits$$inline_570$$ -= $delta$$2_log2$$, $approxRes$$ = $goog$math$Long$fromNumber$$($JSCompiler_inline_result$$16_approx_numBits$$inline_570$$), $approxRem$$ = $approxRes$$.multiply($other$$16$$)
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes$$) && ($approxRes$$ = $goog$math$Long$ONE$$);
    $res$$7$$ = $res$$7$$.add($approxRes$$);
    $high$$inline_571_rem$$1$$ = $JSCompiler_StaticMethods_subtract$$($high$$inline_571_rem$$1$$, $approxRem$$)
  }
  return $res$$7$$
}
$JSCompiler_prototypeAlias$$.not = function $$JSCompiler_prototypeAlias$$$not$() {
  return new $goog$math$Long$$(~this.$low_$, ~this.$high_$)
};
$JSCompiler_prototypeAlias$$.shiftLeft = function $$JSCompiler_prototypeAlias$$$shiftLeft$($numBits$$) {
  $numBits$$ &= 63;
  if(0 == $numBits$$) {
    return this
  }
  var $low$$2$$ = this.$low_$;
  return 32 > $numBits$$ ? new $goog$math$Long$$($low$$2$$ << $numBits$$, this.$high_$ << $numBits$$ | $low$$2$$ >>> 32 - $numBits$$) : new $goog$math$Long$$(0, $low$$2$$ << $numBits$$ - 32)
};
// Input 93
function $bitex$util$getFormAsJSON$$($element$$131$$) {
  for(var $json_res$$1$$ = {}, $el$$74_form_value_values$$17$$, $i$$149$$ = 0;$el$$74_form_value_values$$17$$ = $element$$131$$.elements[$i$$149$$];$i$$149$$++) {
    if(!($el$$74_form_value_values$$17$$.disabled || "fieldset" == $el$$74_form_value_values$$17$$.tagName.toLowerCase())) {
      var $name$$81$$ = $el$$74_form_value_values$$17$$.name;
      if(!$goog$string$isEmpty$$($name$$81$$)) {
        switch($el$$74_form_value_values$$17$$.type.toLowerCase()) {
          case "file":
          ;
          case "submit":
          ;
          case "reset":
          ;
          case "button":
            break;
          case "select-multiple":
            $el$$74_form_value_values$$17$$ = $goog$dom$forms$getValue$$($el$$74_form_value_values$$17$$);
            if($el$$74_form_value_values$$17$$ != $JSCompiler_alias_NULL$$) {
              $json_res$$1$$[$name$$81$$] = [];
              for(var $value$$133$$, $j$$12$$ = 0;$value$$133$$ = $el$$74_form_value_values$$17$$[$j$$12$$];$j$$12$$++) {
                $json_res$$1$$[$name$$81$$].push($value$$133$$)
              }
            }
            break;
          default:
            $el$$74_form_value_values$$17$$ = $goog$dom$forms$getValue$$($el$$74_form_value_values$$17$$), $el$$74_form_value_values$$17$$ != $JSCompiler_alias_NULL$$ && ($json_res$$1$$[$name$$81$$] = $el$$74_form_value_values$$17$$)
        }
      }
    }
  }
  return $json_res$$1$$
}
function $bitex$util$getCountries$$() {
  return{AF:"Afghanistan", AX:"\u00c5land Islands", AL:"Albania", DZ:"Algeria", AS:"American Samoa", AD:"Andorra", AO:"Angola", AI:"Anguilla", AQ:"Antarctica", AG:"Antigua and Barbuda", AR:"Argentina", AM:"Armenia", AW:"Aruba", AC:"Ascension Island", AU:"Australia", AT:"Austria", AZ:"Azerbaijan", BS:"Bahamas", BH:"Bahrain", BD:"Bangladesh", BB:"Barbados", BY:"Belarus", BE:"Belgium", BZ:"Belize", BJ:"Benin", BM:"Bermuda", BT:"Bhutan", BO:"Bolivia", BQ:"Bonaire, Sint Eustatius, and Saba", BA:"Bosnia and Herzegovina", 
  BW:"Botswana", BV:"Bouvet Island", BR:"Brazil", IO:"British Indian Ocean Territory", VG:"British Virgin Islands", BN:"Brunei", BG:"Bulgaria", BF:"Burkina Faso", BI:"Burundi", KH:"Cambodia", CM:"Cameroon", CA:"Canada", IC:"Canary Islands", CV:"Cape Verde", KY:"Cayman Islands", CF:"Central African Republic", EA:"Ceuta and Melilla", TD:"Chad", CL:"Chile", CN:"China", CX:"Christmas Island", CP:"Clipperton Island", CC:"Cocos [Keeling] Islands", CO:"Colombia", KM:"Comoros", CG:"Congo - Brazzaville", 
  CD:"Congo - Kinshasa", CK:"Cook Islands", CR:"Costa Rica", CI:"C\u00f4te d\u2019Ivoire", HR:"Croatia", CU:"Cuba", CW:"Cura\u00e7ao", CY:"Cyprus", CZ:"Czech Republic", DK:"Denmark", DG:"Diego Garcia", DJ:"Djibouti", DM:"Dominica", DO:"Dominican Republic", EC:"Ecuador", EG:"Egypt", SV:"El Salvador", GQ:"Equatorial Guinea", ER:"Eritrea", EE:"Estonia", ET:"Ethiopia", EU:"European Union", FK:"Falkland Islands", FO:"Faroe Islands", FJ:"Fiji", FI:"Finland", FR:"France", GF:"French Guiana", PF:"French Polynesia", 
  TF:"French Southern Territories", GA:"Gabon", GM:"Gambia", GE:"Georgia", DE:"Germany", GH:"Ghana", GI:"Gibraltar", GR:"Greece", GL:"Greenland", GD:"Grenada", GP:"Guadeloupe", GU:"Guam", GT:"Guatemala", GG:"Guernsey", GN:"Guinea", GW:"Guinea-Bissau", GY:"Guyana", HT:"Haiti", HM:"Heard Island and McDonald Islands", HN:"Honduras", HK:"Hong Kong SAR China", HU:"Hungary", IS:"Iceland", IN:"India", ID:"Indonesia", IR:"Iran", IQ:"Iraq", IE:"Ireland", IM:"Isle of Man", IL:"Israel", IT:"Italy", JM:"Jamaica", 
  JP:"Japan", JE:"Jersey", JO:"Jordan", KZ:"Kazakhstan", KE:"Kenya", KI:"Kiribati", KW:"Kuwait", KG:"Kyrgyzstan", LA:"Laos", LV:"Latvia", LB:"Lebanon", LS:"Lesotho", LR:"Liberia", LY:"Libya", LI:"Liechtenstein", LT:"Lithuania", LU:"Luxembourg", MO:"Macau SAR China", MK:"Macedonia", MG:"Madagascar", MW:"Malawi", MY:"Malaysia", MV:"Maldives", ML:"Mali", MT:"Malta", MH:"Marshall Islands", MQ:"Martinique", MR:"Mauritania", MU:"Mauritius", YT:"Mayotte", MX:"Mexico", FM:"Micronesia", MD:"Moldova", MC:"Monaco", 
  MN:"Mongolia", ME:"Montenegro", MS:"Montserrat", MA:"Morocco", MZ:"Mozambique", MM:"Myanmar [Burma]", NA:"Namibia", NR:"Nauru", NP:"Nepal", NL:"Netherlands", AN:"Netherlands Antilles", NC:"New Caledonia", NZ:"New Zealand", NI:"Nicaragua", NE:"Niger", NG:"Nigeria", NU:"Niue", NF:"Norfolk Island", KP:"North Korea", MP:"Northern Mariana Islands", NO:"Norway", OM:"Oman", QO:"Outlying Oceania", PK:"Pakistan", PW:"Palau", PS:"Palestinian Territories", PA:"Panama", PG:"Papua New Guinea", PY:"Paraguay", 
  PE:"Peru", PH:"Philippines", PN:"Pitcairn Islands", PL:"Poland", PT:"Portugal", PR:"Puerto Rico", QA:"Qatar", RE:"R\u00e9union", RO:"Romania", RU:"Russia", RW:"Rwanda", BL:"Saint Barth\u00e9lemy", SH:"Saint Helena", KN:"Saint Kitts and Nevis", LC:"Saint Lucia", MF:"Saint Martin", PM:"Saint Pierre and Miquelon", VC:"Saint Vincent and the Grenadines", WS:"Samoa", SM:"San Marino", ST:"S\u00e3o Tom\u00e9 and Pr\u00edncipe", SA:"Saudi Arabia", SN:"Senegal", RS:"Serbia", CS:"Serbia and Montenegro", SC:"Seychelles", 
  SL:"Sierra Leone", SG:"Singapore", SX:"Sint Maarten", SK:"Slovakia", SI:"Slovenia", SB:"Solomon Islands", SO:"Somalia", ZA:"South Africa", GS:"South Georgia and the South Sandwich Islands", KR:"South Korea", SS:"South Sudan", ES:"Spain", LK:"Sri Lanka", SD:"Sudan", SR:"Suriname", SJ:"Svalbard and Jan Mayen", SZ:"Swaziland", SE:"Sweden", CH:"Switzerland", SY:"Syria", TW:"Taiwan", TJ:"Tajikistan", TZ:"Tanzania", TH:"Thailand", TL:"Timor-Leste", TG:"Togo", TK:"Tokelau", TO:"Tonga", TT:"Trinidad and Tobago", 
  TA:"Tristan da Cunha", TN:"Tunisia", TR:"Turkey", TM:"Turkmenistan", TC:"Turks and Caicos Islands", TV:"Tuvalu", UM:"U.S. Minor Outlying Islands", VI:"U.S. Virgin Islands", UG:"Uganda", UA:"Ukraine", AE:"United Arab Emirates", GB:"United Kingdom", US:["United States", "AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VE|VA|WA|WV|WI|WY", "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming"], 
  UY:"Uruguay", UZ:"Uzbekistan", VU:"Vanuatu", VA:"Vatican City", VE:"Venezuela", VN:"Vietnam", WF:"Wallis and Futuna", EH:"Western Sahara", YE:"Yemen", ZM:"Zambia", ZW:"Zimbabwe"}
}
;
// Input 94
function $goog$ui$ControlRenderer$$() {
}
var $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$;
$goog$addSingletonGetter$$($goog$ui$ControlRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ControlRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($control$$) {
  var $element$$132$$ = $control$$.$getDomHelper$().$createDom$("div", $JSCompiler_StaticMethods_getClassNames$$(this, $control$$).join(" "), $control$$.$content_$);
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$, $element$$132$$);
  return $element$$132$$
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$($element$$133$$) {
  return $element$$133$$
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($control$$1_element$$134$$, $className$$38$$, $enable$$2$$) {
  if($control$$1_element$$134$$ = $control$$1_element$$134$$.$getElement$ ? $control$$1_element$$134$$.$getElement$() : $control$$1_element$$134$$) {
    if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
      var $combinedClasses$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($goog$dom$classes$get$$($control$$1_element$$134$$), $className$$38$$);
      $combinedClasses$$.push($className$$38$$);
      $goog$partial$$($enable$$2$$ ? $goog$dom$classes$add$$ : $goog$dom$classes$remove$$, $control$$1_element$$134$$).apply($JSCompiler_alias_NULL$$, $combinedClasses$$)
    }else {
      $enable$$2$$ ? $goog$dom$classes$add$$($control$$1_element$$134$$, $className$$38$$) : $goog$dom$classes$remove$$($control$$1_element$$134$$, $className$$38$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($control$$3$$, $element$$136$$) {
  $element$$136$$.id && $JSCompiler_StaticMethods_setId$$($control$$3$$, $element$$136$$.id);
  var $contentElem_hasCombinedClassName$$ = this.$getContentElement$($element$$136$$);
  $contentElem_hasCombinedClassName$$ && $contentElem_hasCombinedClassName$$.firstChild ? $control$$3$$.$setContentInternal$($contentElem_hasCombinedClassName$$.firstChild.nextSibling ? $goog$array$toArray$$($contentElem_hasCombinedClassName$$.childNodes) : $contentElem_hasCombinedClassName$$.firstChild) : $control$$3$$.$setContentInternal$($JSCompiler_alias_NULL$$);
  var $state$$3$$ = 0, $rendererClassName$$ = this.$getCssClass$(), $structuralClassName$$ = this.$getCssClass$(), $hasRendererClassName$$ = $JSCompiler_alias_FALSE$$, $hasStructuralClassName$$ = $JSCompiler_alias_FALSE$$, $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_FALSE$$, $classNames$$2$$ = $goog$dom$classes$get$$($element$$136$$);
  $goog$array$forEach$$($classNames$$2$$, function($className$$40_state$$inline_579$$) {
    if(!$hasRendererClassName$$ && $className$$40_state$$inline_579$$ == $rendererClassName$$) {
      $hasRendererClassName$$ = $JSCompiler_alias_TRUE$$, $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$)
    }else {
      if(!$hasStructuralClassName$$ && $className$$40_state$$inline_579$$ == $structuralClassName$$) {
        $hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$
      }else {
        var $JSCompiler_temp_const$$50$$ = $state$$3$$;
        if(!this.$stateByClass_$) {
          this.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$(this);
          var $obj$$inline_859$$ = this.$classByState_$, $transposed$$inline_860$$ = {}, $key$$inline_861$$;
          for($key$$inline_861$$ in $obj$$inline_859$$) {
            $transposed$$inline_860$$[$obj$$inline_859$$[$key$$inline_861$$]] = $key$$inline_861$$
          }
          this.$stateByClass_$ = $transposed$$inline_860$$
        }
        $className$$40_state$$inline_579$$ = parseInt(this.$stateByClass_$[$className$$40_state$$inline_579$$], 10);
        $state$$3$$ = $JSCompiler_temp_const$$50$$ | (isNaN($className$$40_state$$inline_579$$) ? 0 : $className$$40_state$$inline_579$$)
      }
    }
  }, this);
  $control$$3$$.$state_$ = $state$$3$$;
  $hasRendererClassName$$ || ($classNames$$2$$.push($rendererClassName$$), $structuralClassName$$ == $rendererClassName$$ && ($hasStructuralClassName$$ = $JSCompiler_alias_TRUE$$));
  $hasStructuralClassName$$ || $classNames$$2$$.push($structuralClassName$$);
  var $extraClassNames$$ = $control$$3$$.$extraClassNames_$;
  $extraClassNames$$ && $classNames$$2$$.push.apply($classNames$$2$$, $extraClassNames$$);
  if($goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7")) {
    var $combinedClasses$$1$$ = $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$2$$);
    0 < $combinedClasses$$1$$.length && ($classNames$$2$$.push.apply($classNames$$2$$, $combinedClasses$$1$$), $contentElem_hasCombinedClassName$$ = $JSCompiler_alias_TRUE$$)
  }
  if(!$hasRendererClassName$$ || !$hasStructuralClassName$$ || $extraClassNames$$ || $contentElem_hasCombinedClassName$$) {
    $element$$136$$.className = $classNames$$2$$.join(" ")
  }
  $JSCompiler_StaticMethods_setAriaStates$$(this, $control$$3$$, $element$$136$$);
  return $element$$136$$
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($control$$4$$) {
  $control$$4$$.$isRightToLeft$() && this.$setRightToLeft$($control$$4$$.$getElement$(), $JSCompiler_alias_TRUE$$);
  $control$$4$$.isEnabled() && this.$setFocusable$($control$$4$$, $control$$4$$.$visible_$)
};
function $JSCompiler_StaticMethods_setAriaStates$$($JSCompiler_StaticMethods_setAriaStates$self$$, $control$$5$$, $element$$138$$) {
  $control$$5$$.$visible_$ || $goog$a11y$aria$setState$$($element$$138$$, "hidden", !$control$$5$$.$visible_$);
  $control$$5$$.isEnabled() || $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$138$$, 1, !$control$$5$$.isEnabled());
  $control$$5$$.$supportedStates_$ & 8 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$138$$, 8, !!($control$$5$$.$state_$ & 8));
  $control$$5$$.$supportedStates_$ & 16 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$138$$, 16, !!($control$$5$$.$state_$ & 16));
  $control$$5$$.$supportedStates_$ & 64 && $JSCompiler_StaticMethods_setAriaStates$self$$.$updateAriaState$($element$$138$$, 64, $control$$5$$.$isOpen$())
}
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($element$$139$$, $allow$$) {
  var $unselectable$$inline_588_value$$inline_591$$ = !$allow$$, $descendants$$inline_590$$ = $goog$userAgent$IE$$ || $goog$userAgent$OPERA$$ ? $element$$139$$.getElementsByTagName("*") : $JSCompiler_alias_NULL$$;
  if($goog$style$unselectableStyle_$$) {
    if($unselectable$$inline_588_value$$inline_591$$ = $unselectable$$inline_588_value$$inline_591$$ ? "none" : "", $element$$139$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_588_value$$inline_591$$, $descendants$$inline_590$$) {
      for(var $i$$inline_592$$ = 0, $descendant$$inline_593$$;$descendant$$inline_593$$ = $descendants$$inline_590$$[$i$$inline_592$$];$i$$inline_592$$++) {
        $descendant$$inline_593$$.style[$goog$style$unselectableStyle_$$] = $unselectable$$inline_588_value$$inline_591$$
      }
    }
  }else {
    if($goog$userAgent$IE$$ || $goog$userAgent$OPERA$$) {
      if($unselectable$$inline_588_value$$inline_591$$ = $unselectable$$inline_588_value$$inline_591$$ ? "on" : "", $element$$139$$.setAttribute("unselectable", $unselectable$$inline_588_value$$inline_591$$), $descendants$$inline_590$$) {
        for($i$$inline_592$$ = 0;$descendant$$inline_593$$ = $descendants$$inline_590$$[$i$$inline_592$$];$i$$inline_592$$++) {
          $descendant$$inline_593$$.setAttribute("unselectable", $unselectable$$inline_588_value$$inline_591$$)
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($element$$140$$, $rightToLeft$$2$$) {
  this.$enableClassName$($element$$140$$, this.$getCssClass$() + "-rtl", $rightToLeft$$2$$)
};
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($control$$6$$) {
  var $keyTarget$$;
  return $control$$6$$.$supportedStates_$ & 32 && ($keyTarget$$ = $control$$6$$.$getKeyEventTarget$()) ? $goog$dom$isFocusableTabIndex$$($keyTarget$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = function $$JSCompiler_prototypeAlias$$$$setFocusable$$($control$$7$$, $focusable$$) {
  var $element$$inline_595_keyTarget$$1$$;
  if($control$$7$$.$supportedStates_$ & 32 && ($element$$inline_595_keyTarget$$1$$ = $control$$7$$.$getKeyEventTarget$())) {
    if(!$focusable$$ && $control$$7$$.$state_$ & 32) {
      try {
        $element$$inline_595_keyTarget$$1$$.blur()
      }catch($e$$62$$) {
      }
      $control$$7$$.$state_$ & 32 && $control$$7$$.$handleBlur$()
    }
    $goog$dom$isFocusableTabIndex$$($element$$inline_595_keyTarget$$1$$) != $focusable$$ && ($focusable$$ ? $element$$inline_595_keyTarget$$1$$.tabIndex = 0 : ($element$$inline_595_keyTarget$$1$$.tabIndex = -1, $element$$inline_595_keyTarget$$1$$.removeAttribute("tabIndex")))
  }
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($element$$141$$, $visible$$) {
  $goog$style$showElement$$($element$$141$$, $visible$$);
  $element$$141$$ && $goog$a11y$aria$setState$$($element$$141$$, "hidden", !$visible$$)
};
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($control$$8$$, $state$$4$$, $enable$$4$$) {
  var $element$$142$$ = $control$$8$$.$getElement$();
  if($element$$142$$) {
    var $className$$41$$ = $JSCompiler_StaticMethods_getClassForState$$(this, $state$$4$$);
    $className$$41$$ && this.$enableClassName$($control$$8$$, $className$$41$$, $enable$$4$$);
    this.$updateAriaState$($element$$142$$, $state$$4$$, $enable$$4$$)
  }
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$143$$, $ariaState_state$$5$$, $enable$$5$$) {
  $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ || ($goog$ui$ControlRenderer$ARIA_STATE_MAP_$$ = {1:"disabled", 8:"selected", 16:"checked", 64:"expanded"});
  ($ariaState_state$$5$$ = $goog$ui$ControlRenderer$ARIA_STATE_MAP_$$[$ariaState_state$$5$$]) && $goog$a11y$aria$setState$$($element$$143$$, $ariaState_state$$5$$, $enable$$5$$)
};
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$($control$$9$$) {
  return $control$$9$$.$getElement$()
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-control");
function $JSCompiler_StaticMethods_getClassNames$$($JSCompiler_StaticMethods_getClassNames$self$$, $control$$10$$) {
  var $cssClass_extraClassNames$$1_state$$inline_599$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$(), $classNames$$3$$ = [$cssClass_extraClassNames$$1_state$$inline_599$$], $classNames$$inline_600_structuralCssClass$$ = $JSCompiler_StaticMethods_getClassNames$self$$.$getCssClass$();
  $classNames$$inline_600_structuralCssClass$$ != $cssClass_extraClassNames$$1_state$$inline_599$$ && $classNames$$3$$.push($classNames$$inline_600_structuralCssClass$$);
  $cssClass_extraClassNames$$1_state$$inline_599$$ = $control$$10$$.$state_$;
  for($classNames$$inline_600_structuralCssClass$$ = [];$cssClass_extraClassNames$$1_state$$inline_599$$;) {
    var $mask$$inline_601$$ = $cssClass_extraClassNames$$1_state$$inline_599$$ & -$cssClass_extraClassNames$$1_state$$inline_599$$;
    $classNames$$inline_600_structuralCssClass$$.push($JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassNames$self$$, $mask$$inline_601$$));
    $cssClass_extraClassNames$$1_state$$inline_599$$ &= ~$mask$$inline_601$$
  }
  $classNames$$3$$.push.apply($classNames$$3$$, $classNames$$inline_600_structuralCssClass$$);
  ($cssClass_extraClassNames$$1_state$$inline_599$$ = $control$$10$$.$extraClassNames_$) && $classNames$$3$$.push.apply($classNames$$3$$, $cssClass_extraClassNames$$1_state$$inline_599$$);
  $goog$userAgent$IE$$ && !$goog$userAgent$isVersion$$("7") && $classNames$$3$$.push.apply($classNames$$3$$, $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classNames$$3$$));
  return $classNames$$3$$
}
function $JSCompiler_StaticMethods_getAppliedCombinedClassNames_$$($classes$$5$$, $opt_includedClass$$) {
  var $toAdd$$ = [];
  $opt_includedClass$$ && ($classes$$5$$ = $classes$$5$$.concat([$opt_includedClass$$]));
  $goog$array$forEach$$([], function($combo$$) {
    $goog$array$every$$($combo$$, $goog$partial$$($goog$array$contains$$, $classes$$5$$)) && (!$opt_includedClass$$ || $goog$array$contains$$($combo$$, $opt_includedClass$$)) && $toAdd$$.push($combo$$.join("_"))
  });
  return $toAdd$$
}
function $JSCompiler_StaticMethods_getClassForState$$($JSCompiler_StaticMethods_getClassForState$self$$, $state$$7$$) {
  $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$ || $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_getClassForState$self$$);
  return $JSCompiler_StaticMethods_getClassForState$self$$.$classByState_$[$state$$7$$]
}
function $JSCompiler_StaticMethods_createClassByStateMap_$$($JSCompiler_StaticMethods_createClassByStateMap_$self$$) {
  var $baseClass$$ = $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$getCssClass$();
  $JSCompiler_StaticMethods_createClassByStateMap_$self$$.$classByState_$ = {1:$baseClass$$ + "-disabled", 2:$baseClass$$ + "-hover", 4:$baseClass$$ + "-active", 8:$baseClass$$ + "-selected", 16:$baseClass$$ + "-checked", 32:$baseClass$$ + "-focused", 64:$baseClass$$ + "-open"}
}
;
// Input 95
// Input 96
// Input 97
function $goog$ui$Control$$($content$$14$$, $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$, $opt_domHelper$$5$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$5$$);
  if(!$JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$) {
    $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$ = this.constructor;
    for(var $key$$inline_604_rendererCtor$$inline_605$$;$JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$;) {
      $key$$inline_604_rendererCtor$$inline_605$$ = $goog$getUid$$($JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$);
      if($key$$inline_604_rendererCtor$$inline_605$$ = $goog$ui$registry$defaultRenderers_$$[$key$$inline_604_rendererCtor$$inline_605$$]) {
        break
      }
      $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$ = $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$.$superClass_$ ? $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$.$superClass_$.constructor : $JSCompiler_alias_NULL$$
    }
    $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$ = $key$$inline_604_rendererCtor$$inline_605$$ ? $goog$isFunction$$($key$$inline_604_rendererCtor$$inline_605$$.$getInstance$) ? $key$$inline_604_rendererCtor$$inline_605$$.$getInstance$() : new $key$$inline_604_rendererCtor$$inline_605$$ : $JSCompiler_alias_NULL$$
  }
  this.$renderer_$ = $JSCompiler_temp$$20_componentCtor$$inline_603_opt_renderer$$;
  this.$setContentInternal$($content$$14$$)
}
$goog$inherits$$($goog$ui$Control$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Control$$.prototype;
$JSCompiler_prototypeAlias$$.$content_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$state_$ = 0;
$JSCompiler_prototypeAlias$$.$supportedStates_$ = 39;
$JSCompiler_prototypeAlias$$.$autoStates_$ = 255;
$JSCompiler_prototypeAlias$$.$statesWithTransitionEvents_$ = 0;
$JSCompiler_prototypeAlias$$.$visible_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$extraClassNames_$ = $JSCompiler_alias_NULL$$;
$JSCompiler_prototypeAlias$$.$handleMouseEvents_$ = $JSCompiler_alias_TRUE$$;
$JSCompiler_prototypeAlias$$.$allowTextSelection_$ = $JSCompiler_alias_FALSE$$;
$JSCompiler_prototypeAlias$$.$preferredAriaRole_$ = $JSCompiler_alias_NULL$$;
function $JSCompiler_StaticMethods_setHandleMouseEvents$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$inDocument_$ && $JSCompiler_alias_FALSE$$ != $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_setHandleMouseEvents$self$$, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setHandleMouseEvents$self$$.$handleMouseEvents_$ = $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$getKeyEventTarget$ = function $$JSCompiler_prototypeAlias$$$$getKeyEventTarget$$() {
  return this.$renderer_$.$getKeyEventTarget$(this)
};
$JSCompiler_prototypeAlias$$.$enableClassName$ = function $$JSCompiler_prototypeAlias$$$$enableClassName$$($className$$45$$, $enable$$7$$) {
  $enable$$7$$ ? $className$$45$$ && (this.$extraClassNames_$ ? $goog$array$contains$$(this.$extraClassNames_$, $className$$45$$) || this.$extraClassNames_$.push($className$$45$$) : this.$extraClassNames_$ = [$className$$45$$], this.$renderer_$.$enableClassName$(this, $className$$45$$, $JSCompiler_alias_TRUE$$)) : $className$$45$$ && this.$extraClassNames_$ && ($goog$array$remove$$(this.$extraClassNames_$, $className$$45$$), 0 == this.$extraClassNames_$.length && (this.$extraClassNames_$ = $JSCompiler_alias_NULL$$), 
  this.$renderer_$.$enableClassName$(this, $className$$45$$, $JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $element$$146$$ = this.$renderer_$.$createDom$(this);
  this.$element_$ = $element$$146$$;
  var $ariaRole$$inline_629$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_629$$ && $element$$146$$.setAttribute("role", $ariaRole$$inline_629$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$146$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ || this.$renderer_$.$setVisible$($element$$146$$, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$getContentElement$ = function $$JSCompiler_prototypeAlias$$$$getContentElement$$() {
  return this.$renderer_$.$getContentElement$(this.$getElement$())
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$147$$) {
  return this.$renderer_$.$canDecorate$($element$$147$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = function $$JSCompiler_prototypeAlias$$$$decorateInternal$$($element$$148$$) {
  this.$element_$ = $element$$148$$ = this.$renderer_$.$decorate$(this, $element$$148$$);
  var $ariaRole$$inline_637$$ = this.$preferredAriaRole_$ || this.$renderer_$.$getAriaRole$();
  $ariaRole$$inline_637$$ && $element$$148$$.setAttribute("role", $ariaRole$$inline_637$$);
  this.$allowTextSelection_$ || this.$renderer_$.$setAllowTextSelection$($element$$148$$, $JSCompiler_alias_FALSE$$);
  this.$visible_$ = "none" != $element$$148$$.style.display
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Control$$.$superClass_$.$enterDocument$.call(this);
  this.$renderer_$.$initializeDom$(this);
  if(this.$supportedStates_$ & -2 && (this.$handleMouseEvents_$ && $JSCompiler_StaticMethods_enableMouseEventHandling_$$(this, $JSCompiler_alias_TRUE$$), this.$supportedStates_$ & 32)) {
    var $keyTarget$$2$$ = this.$getKeyEventTarget$();
    if($keyTarget$$2$$) {
      var $keyHandler$$ = this.$keyHandler_$ || (this.$keyHandler_$ = new $goog$events$KeyHandler$$);
      $JSCompiler_StaticMethods_attach$$($keyHandler$$, $keyTarget$$2$$);
      $JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyHandler$$, "key", this.$handleKeyEvent$), $keyTarget$$2$$, "focus", this.$handleFocus$), $keyTarget$$2$$, "blur", this.$handleBlur$)
    }
  }
};
function $JSCompiler_StaticMethods_enableMouseEventHandling_$$($JSCompiler_StaticMethods_enableMouseEventHandling_$self$$, $enable$$8$$) {
  var $handler$$48$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getHandler$(), $element$$149$$ = $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$getElement$();
  $enable$$8$$ ? ($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($JSCompiler_StaticMethods_listen$$($handler$$48$$, $element$$149$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$149$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$149$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$149$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_listen$$($handler$$48$$, $element$$149$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_listen$$($handler$$48$$, $element$$149$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$)) : 
  ($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($JSCompiler_StaticMethods_unlisten$$($handler$$48$$, $element$$149$$, "mouseover", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOver$), $element$$149$$, "mousedown", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseDown$), $element$$149$$, "mouseup", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseUp$), $element$$149$$, 
  "mouseout", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleMouseOut$), $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$ != $goog$nullFunction$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$48$$, $element$$149$$, "contextmenu", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleContextMenu$), $goog$userAgent$IE$$ && $JSCompiler_StaticMethods_unlisten$$($handler$$48$$, $element$$149$$, "dblclick", $JSCompiler_StaticMethods_enableMouseEventHandling_$self$$.$handleDblClick$))
}
$JSCompiler_prototypeAlias$$.$exitDocument$ = function $$JSCompiler_prototypeAlias$$$$exitDocument$$() {
  $goog$ui$Control$$.$superClass_$.$exitDocument$.call(this);
  this.$keyHandler_$ && this.$keyHandler_$.detach();
  this.$visible_$ && this.isEnabled() && this.$renderer_$.$setFocusable$(this, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Control$$.$superClass_$.$disposeInternal$.call(this);
  this.$keyHandler_$ && (this.$keyHandler_$.$dispose$(), delete this.$keyHandler_$);
  delete this.$renderer_$;
  this.$extraClassNames_$ = this.$content_$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setContentInternal$ = $JSCompiler_set$$("$content_$");
function $JSCompiler_StaticMethods_getCaption$$($JSCompiler_StaticMethods_getCaption$self_content$$17$$) {
  $JSCompiler_StaticMethods_getCaption$self_content$$17$$ = $JSCompiler_StaticMethods_getCaption$self_content$$17$$.$content_$;
  return!$JSCompiler_StaticMethods_getCaption$self_content$$17$$ ? "" : ($goog$isString$$($JSCompiler_StaticMethods_getCaption$self_content$$17$$) ? $JSCompiler_StaticMethods_getCaption$self_content$$17$$ : $goog$isArray$$($JSCompiler_StaticMethods_getCaption$self_content$$17$$) ? $goog$array$map$$($JSCompiler_StaticMethods_getCaption$self_content$$17$$, $goog$dom$getRawTextContent$$).join("") : $goog$dom$getTextContent$$($JSCompiler_StaticMethods_getCaption$self_content$$17$$)).replace(/[\t\r\n ]+/g, 
  " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = function $$JSCompiler_prototypeAlias$$$$setRightToLeft$$($rightToLeft$$3$$) {
  $goog$ui$Control$$.$superClass_$.$setRightToLeft$.call(this, $rightToLeft$$3$$);
  var $element$$150$$ = this.$getElement$();
  $element$$150$$ && this.$renderer_$.$setRightToLeft$($element$$150$$, $rightToLeft$$3$$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = function $$JSCompiler_prototypeAlias$$$$setAllowTextSelection$$($allow$$1$$) {
  this.$allowTextSelection_$ = $allow$$1$$;
  var $element$$151$$ = this.$getElement$();
  $element$$151$$ && this.$renderer_$.$setAllowTextSelection$($element$$151$$, $allow$$1$$)
};
$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($visible$$1$$, $opt_force$$) {
  if($opt_force$$ || this.$visible_$ != $visible$$1$$ && this.dispatchEvent($visible$$1$$ ? "show" : "hide")) {
    var $element$$152$$ = this.$getElement$();
    $element$$152$$ && this.$renderer_$.$setVisible$($element$$152$$, $visible$$1$$);
    this.isEnabled() && this.$renderer_$.$setFocusable$(this, $visible$$1$$);
    this.$visible_$ = $visible$$1$$;
    return $JSCompiler_alias_TRUE$$
  }
  return $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.isEnabled = function $$JSCompiler_prototypeAlias$$$isEnabled$() {
  return!(this.$state_$ & 1)
};
$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enable$$9$$) {
  var $parent$$inline_640$$ = this.getParent();
  if((!$parent$$inline_640$$ || "function" != typeof $parent$$inline_640$$.isEnabled || $parent$$inline_640$$.isEnabled()) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 1, !$enable$$9$$)) {
    $enable$$9$$ || (this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)), this.$visible_$ && this.$renderer_$.$setFocusable$(this, $enable$$9$$), this.$setState$(1, !$enable$$9$$)
  }
};
function $JSCompiler_StaticMethods_setHighlighted$$($JSCompiler_StaticMethods_setHighlighted$self$$, $highlight$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_setHighlighted$self$$, 2, $highlight$$) && $JSCompiler_StaticMethods_setHighlighted$self$$.$setState$(2, $highlight$$)
}
$JSCompiler_prototypeAlias$$.$isActive$ = function $$JSCompiler_prototypeAlias$$$$isActive$$() {
  return!!(this.$state_$ & 4)
};
$JSCompiler_prototypeAlias$$.setActive = function $$JSCompiler_prototypeAlias$$$setActive$($active$$) {
  $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 4, $active$$) && this.$setState$(4, $active$$)
};
$JSCompiler_prototypeAlias$$.$isOpen$ = function $$JSCompiler_prototypeAlias$$$$isOpen$$() {
  return!!(this.$state_$ & 64)
};
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($state$$10$$, $enable$$10$$) {
  this.$supportedStates_$ & $state$$10$$ && $enable$$10$$ != !!(this.$state_$ & $state$$10$$) && (this.$renderer_$.$setState$(this, $state$$10$$, $enable$$10$$), this.$state_$ = $enable$$10$$ ? this.$state_$ | $state$$10$$ : this.$state_$ & ~$state$$10$$)
};
function $JSCompiler_StaticMethods_setSupportedState$$($JSCompiler_StaticMethods_setSupportedState$self$$) {
  $JSCompiler_StaticMethods_setSupportedState$self$$.$inDocument_$ && $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_alias_THROW$$(Error("Component already rendered"));
  $JSCompiler_StaticMethods_setSupportedState$self$$.$state_$ & 32 && $JSCompiler_StaticMethods_setSupportedState$self$$.$setState$(32, $JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_setSupportedState$self$$.$supportedStates_$ &= -33
}
function $JSCompiler_StaticMethods_isAutoState$$($JSCompiler_StaticMethods_isAutoState$self$$, $state$$14$$) {
  return!!($JSCompiler_StaticMethods_isAutoState$self$$.$autoStates_$ & $state$$14$$) && !!($JSCompiler_StaticMethods_isAutoState$self$$.$supportedStates_$ & $state$$14$$)
}
function $JSCompiler_StaticMethods_isTransitionAllowed$$($JSCompiler_StaticMethods_isTransitionAllowed$self$$, $state$$16$$, $enable$$13$$) {
  return!!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$supportedStates_$ & $state$$16$$) && !!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$state_$ & $state$$16$$) != $enable$$13$$ && (!($JSCompiler_StaticMethods_isTransitionAllowed$self$$.$statesWithTransitionEvents_$ & $state$$16$$) || $JSCompiler_StaticMethods_isTransitionAllowed$self$$.dispatchEvent($goog$ui$Component$getStateTransitionEvent$$($state$$16$$, $enable$$13$$))) && !$JSCompiler_StaticMethods_isTransitionAllowed$self$$.$disposed_$
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$($e$$63$$) {
  (!$e$$63$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$63$$.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && $JSCompiler_StaticMethods_isAutoState$$(this, 2)) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$($e$$64$$) {
  if((!$e$$64$$.relatedTarget || !$goog$dom$contains$$(this.$getElement$(), $e$$64$$.relatedTarget)) && this.dispatchEvent("leave")) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleContextMenu$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleMouseDown$$($e$$66$$) {
  if(this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_isButton$$($e$$66$$) && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$MAC$$ || !$e$$66$$.ctrlKey))) {
    $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_TRUE$$), this.$renderer_$.$isFocusable$(this) && this.$getKeyEventTarget$().focus()
  }
  !this.$allowTextSelection_$ && ($JSCompiler_StaticMethods_isButton$$($e$$66$$) && (!$goog$userAgent$WEBKIT$$ || !$goog$userAgent$MAC$$ || !$e$$66$$.ctrlKey)) && $e$$66$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($e$$67$$) {
  this.isEnabled() && ($JSCompiler_StaticMethods_isAutoState$$(this, 2) && $JSCompiler_StaticMethods_setHighlighted$$(this, $JSCompiler_alias_TRUE$$), this.$isActive$() && (this.$performActionInternal$($e$$67$$) && $JSCompiler_StaticMethods_isAutoState$$(this, 4)) && this.setActive($JSCompiler_alias_FALSE$$))
};
$JSCompiler_prototypeAlias$$.$handleDblClick$ = function $$JSCompiler_prototypeAlias$$$$handleDblClick$$($e$$68$$) {
  this.isEnabled() && this.$performActionInternal$($e$$68$$)
};
$JSCompiler_prototypeAlias$$.$performActionInternal$ = function $$JSCompiler_prototypeAlias$$$$performActionInternal$$($e$$69$$) {
  if($JSCompiler_StaticMethods_isAutoState$$(this, 16)) {
    var $actionEvent_check$$inline_643_open$$inline_649$$ = !(this.$state_$ & 16);
    $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 16, $actionEvent_check$$inline_643_open$$inline_649$$) && this.$setState$(16, $actionEvent_check$$inline_643_open$$inline_649$$)
  }
  $JSCompiler_StaticMethods_isAutoState$$(this, 8) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 8, $JSCompiler_alias_TRUE$$) && this.$setState$(8, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 64) && ($actionEvent_check$$inline_643_open$$inline_649$$ = !this.$isOpen$(), $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 64, $actionEvent_check$$inline_643_open$$inline_649$$) && this.$setState$(64, $actionEvent_check$$inline_643_open$$inline_649$$));
  $actionEvent_check$$inline_643_open$$inline_649$$ = new $goog$events$Event$$("action", this);
  $e$$69$$ && ($actionEvent_check$$inline_643_open$$inline_649$$.altKey = $e$$69$$.altKey, $actionEvent_check$$inline_643_open$$inline_649$$.ctrlKey = $e$$69$$.ctrlKey, $actionEvent_check$$inline_643_open$$inline_649$$.metaKey = $e$$69$$.metaKey, $actionEvent_check$$inline_643_open$$inline_649$$.shiftKey = $e$$69$$.shiftKey, $actionEvent_check$$inline_643_open$$inline_649$$.$platformModifierKey$ = $e$$69$$.$platformModifierKey$);
  return this.dispatchEvent($actionEvent_check$$inline_643_open$$inline_649$$)
};
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_TRUE$$) && this.$setState$(32, $JSCompiler_alias_TRUE$$)
};
$JSCompiler_prototypeAlias$$.$handleBlur$ = function $$JSCompiler_prototypeAlias$$$$handleBlur$$() {
  $JSCompiler_StaticMethods_isAutoState$$(this, 4) && this.setActive($JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_isAutoState$$(this, 32) && $JSCompiler_StaticMethods_isTransitionAllowed$$(this, 32, $JSCompiler_alias_FALSE$$) && this.$setState$(32, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$handleKeyEvent$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEvent$$($e$$72$$) {
  return this.$visible_$ && this.isEnabled() && this.$handleKeyEventInternal$($e$$72$$) ? ($e$$72$$.preventDefault(), $e$$72$$.stopPropagation(), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$73$$) {
  return $e$$73$$.keyCode == $goog$events$KeyCodes$ENTER$$ && this.$performActionInternal$($e$$73$$)
};
$goog$isFunction$$($goog$ui$Control$$) || $JSCompiler_alias_THROW$$(Error("Invalid component class " + $goog$ui$Control$$));
$goog$isFunction$$($goog$ui$ControlRenderer$$) || $JSCompiler_alias_THROW$$(Error("Invalid renderer class " + $goog$ui$ControlRenderer$$));
var $key$$inline_659$$ = $goog$getUid$$($goog$ui$Control$$);
$goog$ui$registry$defaultRenderers_$$[$key$$inline_659$$] = $goog$ui$ControlRenderer$$;
$goog$ui$registry$setDecoratorByClassName$$("goog-control", function() {
  return new $goog$ui$Control$$($JSCompiler_alias_NULL$$)
});
// Input 98
// Input 99
function $goog$ui$ButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$ButtonRenderer$$, $goog$ui$ControlRenderer$$);
$goog$addSingletonGetter$$($goog$ui$ButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$ButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_returnArg$$("button");
$JSCompiler_prototypeAlias$$.$updateAriaState$ = function $$JSCompiler_prototypeAlias$$$$updateAriaState$$($element$$153$$, $state$$17$$, $enable$$14$$) {
  16 == $state$$17$$ ? $goog$a11y$aria$setState$$($element$$153$$, "pressed", $enable$$14$$) : $goog$ui$ButtonRenderer$$.$superClass_$.$updateAriaState$.call(this, $element$$153$$, $state$$17$$, $enable$$14$$)
};
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$1$$) {
  var $element$$154$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$createDom$.call(this, $button$$1$$), $tooltip_value$$134$$ = $button$$1$$.$getTooltip$();
  $tooltip_value$$134$$ && this.$setTooltip$($element$$154$$, $tooltip_value$$134$$);
  ($tooltip_value$$134$$ = $button$$1$$.$getValue$()) && this.$setValue$($element$$154$$, $tooltip_value$$134$$);
  $button$$1$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$154$$, 16, !!($button$$1$$.$state_$ & 16));
  return $element$$154$$
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$2$$, $element$$155$$) {
  $element$$155$$ = $goog$ui$ButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$2$$, $element$$155$$);
  var $value$$inline_662$$ = this.$getValue$($element$$155$$);
  $button$$2$$.$value_$ = $value$$inline_662$$;
  $button$$2$$.$tooltip_$ = this.$getTooltip$($element$$155$$);
  $button$$2$$.$supportedStates_$ & 16 && this.$updateAriaState$($element$$155$$, 16, !!($button$$2$$.$state_$ & 16));
  return $element$$155$$
};
$JSCompiler_prototypeAlias$$.$getValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setValue$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($element$$156$$) {
  return $element$$156$$.title
};
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($element$$157$$, $tooltip$$1$$) {
  $element$$157$$ && ($element$$157$$.title = $tooltip$$1$$ || "")
};
$JSCompiler_prototypeAlias$$.$getCssClass$ = $JSCompiler_returnArg$$("goog-button");
// Input 100
function $goog$ui$NativeButtonRenderer$$() {
}
$goog$inherits$$($goog$ui$NativeButtonRenderer$$, $goog$ui$ButtonRenderer$$);
$goog$addSingletonGetter$$($goog$ui$NativeButtonRenderer$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$NativeButtonRenderer$$.prototype;
$JSCompiler_prototypeAlias$$.$getAriaRole$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$($button$$4$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$4$$);
  $button$$4$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$4$$);
  return $button$$4$$.$getDomHelper$().$createDom$("button", {"class":$JSCompiler_StaticMethods_getClassNames$$(this, $button$$4$$).join(" "), disabled:!$button$$4$$.isEnabled(), title:$button$$4$$.$getTooltip$() || "", value:$button$$4$$.$getValue$() || ""}, $JSCompiler_StaticMethods_getCaption$$($button$$4$$) || "")
};
$JSCompiler_prototypeAlias$$.$canDecorate$ = function $$JSCompiler_prototypeAlias$$$$canDecorate$$($element$$158$$) {
  return"BUTTON" == $element$$158$$.tagName || "INPUT" == $element$$158$$.tagName && ("button" == $element$$158$$.type || "submit" == $element$$158$$.type || "reset" == $element$$158$$.type)
};
$JSCompiler_prototypeAlias$$.$decorate$ = function $$JSCompiler_prototypeAlias$$$$decorate$$($button$$5$$, $element$$159$$) {
  $JSCompiler_StaticMethods_setHandleMouseEvents$$($button$$5$$);
  $button$$5$$.$autoStates_$ &= -256;
  $JSCompiler_StaticMethods_setSupportedState$$($button$$5$$);
  $element$$159$$.disabled && $goog$dom$classes$add$$($element$$159$$, $JSCompiler_StaticMethods_getClassForState$$(this, 1));
  return $goog$ui$NativeButtonRenderer$$.$superClass_$.$decorate$.call(this, $button$$5$$, $element$$159$$)
};
$JSCompiler_prototypeAlias$$.$initializeDom$ = function $$JSCompiler_prototypeAlias$$$$initializeDom$$($button$$6$$) {
  $JSCompiler_StaticMethods_listen$$($button$$6$$.$getHandler$(), $button$$6$$.$getElement$(), "click", $button$$6$$.$performActionInternal$)
};
$JSCompiler_prototypeAlias$$.$setAllowTextSelection$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setRightToLeft$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$isFocusable$ = function $$JSCompiler_prototypeAlias$$$$isFocusable$$($button$$7$$) {
  return $button$$7$$.isEnabled()
};
$JSCompiler_prototypeAlias$$.$setFocusable$ = $goog$nullFunction$$;
$JSCompiler_prototypeAlias$$.$setState$ = function $$JSCompiler_prototypeAlias$$$$setState$$($button$$8_element$$160$$, $state$$18$$, $enable$$15$$) {
  $goog$ui$NativeButtonRenderer$$.$superClass_$.$setState$.call(this, $button$$8_element$$160$$, $state$$18$$, $enable$$15$$);
  if(($button$$8_element$$160$$ = $button$$8_element$$160$$.$getElement$()) && 1 == $state$$18$$) {
    $button$$8_element$$160$$.disabled = $enable$$15$$
  }
};
$JSCompiler_prototypeAlias$$.$getValue$ = function $$JSCompiler_prototypeAlias$$$$getValue$$($element$$161$$) {
  return $element$$161$$.value
};
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($element$$162$$, $value$$135$$) {
  $element$$162$$ && ($element$$162$$.value = $value$$135$$)
};
$JSCompiler_prototypeAlias$$.$updateAriaState$ = $goog$nullFunction$$;
// Input 101
function $goog$ui$Button$$($content$$18$$, $opt_renderer$$1$$, $opt_domHelper$$6$$) {
  $goog$ui$Control$$.call(this, $content$$18$$, $opt_renderer$$1$$ || $goog$ui$NativeButtonRenderer$$.$getInstance$(), $opt_domHelper$$6$$)
}
$goog$inherits$$($goog$ui$Button$$, $goog$ui$Control$$);
$JSCompiler_prototypeAlias$$ = $goog$ui$Button$$.prototype;
$JSCompiler_prototypeAlias$$.$getValue$ = $JSCompiler_get$$("$value_$");
$JSCompiler_prototypeAlias$$.$setValue$ = function $$JSCompiler_prototypeAlias$$$$setValue$$($value$$136$$) {
  this.$value_$ = $value$$136$$;
  this.$renderer_$.$setValue$(this.$getElement$(), $value$$136$$)
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = $JSCompiler_get$$("$tooltip_$");
$JSCompiler_prototypeAlias$$.$setTooltip$ = function $$JSCompiler_prototypeAlias$$$$setTooltip$$($tooltip$$2$$) {
  this.$tooltip_$ = $tooltip$$2$$;
  this.$renderer_$.$setTooltip$(this.$getElement$(), $tooltip$$2$$)
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function $$JSCompiler_prototypeAlias$$$$disposeInternal$$() {
  $goog$ui$Button$$.$superClass_$.$disposeInternal$.call(this);
  delete this.$value_$;
  delete this.$tooltip_$
};
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $goog$ui$Button$$.$superClass_$.$enterDocument$.call(this);
  if(this.$supportedStates_$ & 32) {
    var $keyTarget$$3$$ = this.$getKeyEventTarget$();
    $keyTarget$$3$$ && $JSCompiler_StaticMethods_listen$$(this.$getHandler$(), $keyTarget$$3$$, "keyup", this.$handleKeyEventInternal$)
  }
};
$JSCompiler_prototypeAlias$$.$handleKeyEventInternal$ = function $$JSCompiler_prototypeAlias$$$$handleKeyEventInternal$$($e$$74$$) {
  return $e$$74$$.keyCode == $goog$events$KeyCodes$ENTER$$ && "key" == $e$$74$$.type || $e$$74$$.keyCode == $goog$events$KeyCodes$SPACE$$ && "keyup" == $e$$74$$.type ? this.$performActionInternal$($e$$74$$) : $e$$74$$.keyCode == $goog$events$KeyCodes$SPACE$$
};
$goog$ui$registry$setDecoratorByClassName$$("goog-button", function() {
  return new $goog$ui$Button$$($JSCompiler_alias_NULL$$)
});
// Input 102
// Input 103
// Input 104
// Input 105
function $bootstrap$Alert$$($opt_type$$10$$, $opt_content$$, $opt_close$$, $opt_domHelper$$7$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$7$$);
  this.$type_$ = $opt_type$$10$$;
  this.$content_$ = $opt_content$$;
  this.$has_close_$ = $JSCompiler_alias_TRUE$$;
  $opt_close$$ != $JSCompiler_alias_NULL$$ && $opt_close$$ === $JSCompiler_alias_FALSE$$ && (this.$has_close_$ = $JSCompiler_alias_FALSE$$)
}
$goog$inherits$$($bootstrap$Alert$$, $goog$ui$Component$$);
$bootstrap$Alert$$.prototype.$getCssClass$ = $JSCompiler_returnArg$$("alert");
$bootstrap$Alert$$.prototype.$createDom$ = function $$bootstrap$Alert$$$$$createDom$$() {
  var $dom$$7_element$$163$$ = this.$getDomHelper$();
  return this.$element_$ = $dom$$7_element$$163$$ = this.$has_close_$ ? $dom$$7_element$$163$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], $dom$$7_element$$163$$.$createDom$("button", ["close", "pull-right"], "\u00d7"), this.$content_$) : $dom$$7_element$$163$$.$createDom$("div", [this.$getCssClass$(), this.$getCssClass$() + "-" + this.$type_$], this.$content_$)
};
$bootstrap$Alert$$.prototype.$logger_$ = $goog$debug$LogManager$getLogger$$("bootstrap.Alert");
$bootstrap$Alert$$.prototype.$enterDocument$ = function $$bootstrap$Alert$$$$$enterDocument$$() {
  $bootstrap$Alert$$.$superClass_$.$enterDocument$.call(this);
  var $closeBtn_dom$$8$$ = this.$getDomHelper$(), $handler$$49$$ = this.$getHandler$(), $closeBtn_dom$$8$$ = $closeBtn_dom$$8$$.$getElementByClass$("close", this.$getElement$());
  $closeBtn_dom$$8$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_listenOnce$$($handler$$49$$, $closeBtn_dom$$8$$, "click", function() {
    this.$dispose$()
  })
};
// Input 106
function $bitex$ui$ListView$templates$ListView$$($opt_data$$6$$) {
  return"<div " + ($opt_data$$6$$.id ? ' id="' + $soy$$0$0escapeHtml$$($opt_data$$6$$.id) + '" ' : "") + " >" + ($opt_data$$6$$.$show_search$ ? '<form class="ui-filterable"><div class="ui-input-search ui-shadow-inset ui-input-has-clear ui-body-inherit ui-corner-all"><input data-type="search" ' + ($opt_data$$6$$.$search_placeholder$ ? 'placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$6$$.$search_placeholder$) + '"' : "") + ' data-lastval=""><a href="#" class="ui-input-clear ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all ui-input-clear-hidden"></a></div></form>' : 
  "") + '<ul data-role="listview"' + ($opt_data$$6$$.$show_search$ ? 'data-filter="true"' : "") + ($opt_data$$6$$.$search_placeholder$ ? 'data-filter-placeholder="' + $soy$$0$0escapeHtml$$($opt_data$$6$$.$search_placeholder$) + '"' : "") + 'class="ui-listview ui-listview-inset ui-corner-all ui-shadow ' + ($opt_data$$6$$.$base_class$ ? $soy$$0$0escapeHtml$$($opt_data$$6$$.$base_class$) : "") + '" data-inset="true"></ul></div>'
}
;
// Input 107
function $bitex$ui$ListView$$($options$$6$$, $opt_domHelper$$8$$) {
  $goog$ui$Component$$.call(this, $opt_domHelper$$8$$);
  this.$model_$ = {$rowIDFn$:$options$$6$$.rowIDFn || $goog$nullFunction$$, $rowClassFn$:$options$$6$$.rowClassFn || $goog$nullFunction$$, $rowFormatterFn$:$options$$6$$.rowFormatterFn || $goog$nullFunction$$, $currentPage$:$options$$6$$.currentPage || 0, $limit$:$options$$6$$.limit || 100, $blinkDelay$:$options$$6$$.blinkDelay || 700, $showSearch$:$options$$6$$.showSearch || $JSCompiler_alias_FALSE$$, $searchPlaceholder$:$options$$6$$.searchPlaceholder || $JSCompiler_alias_FALSE$$};
  this.$loading_data_$ = $goog$dom$createDom$$("div", ["progress", "progress-striped", "active"], $goog$dom$createDom$$("div", "bar"));
  this.$loading_data_$.style.width = $goog$style$getPixelStyleValue_$$("50%");
  var $element$$inline_680$$ = this.$loading_data_$;
  $goog$isString$$("margin") ? $goog$style$setStyle_$$($element$$inline_680$$, "auto", "margin") : $goog$object$forEach$$("margin", $goog$partial$$($goog$style$setStyle_$$, $element$$inline_680$$));
  $goog$dom$getFirstElementChild$$(this.$loading_data_$).style.width = $goog$style$getPixelStyleValue_$$("100%")
}
$goog$inherits$$($bitex$ui$ListView$$, $goog$ui$Component$$);
$JSCompiler_prototypeAlias$$ = $bitex$ui$ListView$$.prototype;
$JSCompiler_prototypeAlias$$.$createDom$ = function $$JSCompiler_prototypeAlias$$$$createDom$$() {
  var $el$$75$$ = $goog$soy$renderAsElement$$($bitex$ui$ListView$templates$ListView$$, {id:$JSCompiler_StaticMethods_getId$$(this) + ".list", $base_class$:"list-view", $show_search$:this.$model_$.$showSearch$, $search_placeholder$:this.$model_$.$searchPlaceholder$});
  this.$decorateInternal$($el$$75$$)
};
$JSCompiler_prototypeAlias$$.$decorateInternal$ = $JSCompiler_set$$("$element_$");
function $JSCompiler_StaticMethods_render_data_$$($JSCompiler_StaticMethods_render_data_$self$$) {
  $JSCompiler_StaticMethods_render_data_$self$$.dispatchEvent(new $bitex$ui$ListViewEvent$$("list_view_request_data", {Page:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$currentPage$, Limit:$JSCompiler_StaticMethods_render_data_$self$$.$model_$.$limit$}))
}
$JSCompiler_prototypeAlias$$.$enterDocument$ = function $$JSCompiler_prototypeAlias$$$$enterDocument$$() {
  $bitex$ui$ListView$$.$superClass_$.$enterDocument$.call(this);
  $JSCompiler_StaticMethods_render_data_$$(this)
};
$JSCompiler_prototypeAlias$$.reload = function $$JSCompiler_prototypeAlias$$$reload$() {
  $JSCompiler_StaticMethods_render_data_$$(this)
};
function $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_resultSetToElements$self$$, $resultSet$$, $columns$$4$$) {
  var $elements$$3$$ = [];
  $goog$array$forEach$$($resultSet$$, function($rowFormatterFn$$1_row_element$$1_row_set$$1$$) {
    var $rowSetObj_row_id$$1$$ = {}, $rowClassFn$$1_x$$70$$;
    for($rowClassFn$$1_x$$70$$ in $columns$$4$$) {
      $rowSetObj_row_id$$1$$[$columns$$4$$[$rowClassFn$$1_x$$70$$]] = $rowFormatterFn$$1_row_element$$1_row_set$$1$$[$rowClassFn$$1_x$$70$$]
    }
    $rowFormatterFn$$1_row_element$$1_row_set$$1$$ = $goog$bind$$(this.$model_$.$rowFormatterFn$, this);
    $rowClassFn$$1_x$$70$$ = $goog$bind$$(this.$model_$.$rowClassFn$, this);
    $rowFormatterFn$$1_row_element$$1_row_set$$1$$ = $goog$dom$createDom$$("li", $rowClassFn$$1_x$$70$$($rowSetObj_row_id$$1$$), $rowFormatterFn$$1_row_element$$1_row_set$$1$$($rowSetObj_row_id$$1$$));
    $rowSetObj_row_id$$1$$ = this.$model_$.$rowIDFn$.call(this, $rowSetObj_row_id$$1$$);
    $rowSetObj_row_id$$1$$ != $JSCompiler_alias_NULL$$ && ($rowFormatterFn$$1_row_element$$1_row_set$$1$$.id = $rowSetObj_row_id$$1$$);
    $elements$$3$$.push($rowFormatterFn$$1_row_element$$1_row_set$$1$$)
  }, $JSCompiler_StaticMethods_resultSetToElements$self$$);
  return $elements$$3$$
}
$JSCompiler_prototypeAlias$$.clear = function $$JSCompiler_prototypeAlias$$$clear$() {
  var $ul_element$$ = $goog$dom$getElementsByTagNameAndClass_$$("UL", $JSCompiler_alias_VOID$$, this.$getElement$())[0];
  $goog$dom$removeChildren$$($ul_element$$)
};
function $JSCompiler_StaticMethods_appendResultSet$$($JSCompiler_StaticMethods_appendResultSet$self$$, $elements$$4_load_more_button_resultSet$$2$$, $columns$$6$$) {
  var $ul_element$$1$$ = $goog$dom$getElementsByTagNameAndClass_$$("UL", $JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_appendResultSet$self$$.$getElement$())[0];
  $elements$$4_load_more_button_resultSet$$2$$ = $JSCompiler_StaticMethods_resultSetToElements$$($JSCompiler_StaticMethods_appendResultSet$self$$, $elements$$4_load_more_button_resultSet$$2$$, $columns$$6$$);
  $goog$array$forEach$$($elements$$4_load_more_button_resultSet$$2$$, function($el$$76$$) {
    $ul_element$$1$$.appendChild($el$$76$$)
  }, $JSCompiler_StaticMethods_appendResultSet$self$$);
  $elements$$4_load_more_button_resultSet$$2$$.length == $JSCompiler_StaticMethods_appendResultSet$self$$.$model_$.$limit$ && (console.log("reached limit"), $elements$$4_load_more_button_resultSet$$2$$ = $goog$dom$createDom$$("a", {href:"#", "class":"ui-btn"}, "Load more..."), $elements$$4_load_more_button_resultSet$$2$$.id = $JSCompiler_StaticMethods_getId$$($JSCompiler_StaticMethods_appendResultSet$self$$) + ".load_more", $ul_element$$1$$.appendChild($elements$$4_load_more_button_resultSet$$2$$), 
  $JSCompiler_StaticMethods_listenOnce$$($JSCompiler_StaticMethods_appendResultSet$self$$.$getHandler$(), $elements$$4_load_more_button_resultSet$$2$$, "click", $JSCompiler_StaticMethods_appendResultSet$self$$.$onLoadMoreButtonClick_$))
}
$JSCompiler_prototypeAlias$$.$onLoadMoreButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onLoadMoreButtonClick_$$($e$$79$$) {
  $e$$79$$.stopPropagation();
  $e$$79$$.preventDefault();
  $goog$dom$removeNode$$($goog$dom$getElement$$($JSCompiler_StaticMethods_getId$$(this) + ".load_more"));
  this.$model_$.$currentPage$ += 1;
  $JSCompiler_StaticMethods_render_data_$$(this)
};
function $bitex$ui$ListViewEvent$$($type$$101$$, $options$$8$$) {
  $goog$events$Event$$.call(this, $type$$101$$);
  this.options = $options$$8$$
}
$goog$inherits$$($bitex$ui$ListViewEvent$$, $goog$events$Event$$);
// Input 108
function $bitex$app$MerchantApp$$($opt_default_country$$, $opt_default_broker_id$$) {
  $goog$Disposable$$.call(this);
  this.$model_$ = new $bitex$model$Model$$(document.body);
  this.$conn_$ = new $bitex$api$BitEx$$;
  $opt_default_country$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultCountry", $opt_default_country$$);
  $opt_default_broker_id$$ != $JSCompiler_alias_NULL$$ && this.$model_$.set("DefaultBrokerID", $opt_default_broker_id$$);
  this.$currency_info_$ = {};
  this.$all_markets_$ = {};
  this.$bids_$ = {};
  this.$quote_list_$ = {};
  this.$deposit_request_id_$ = $JSCompiler_alias_NULL$$
}
$goog$inherits$$($bitex$app$MerchantApp$$, $goog$events$EventTarget$$);
$goog$addSingletonGetter$$($bitex$app$MerchantApp$$);
$JSCompiler_prototypeAlias$$ = $bitex$app$MerchantApp$$.prototype;
$JSCompiler_prototypeAlias$$.$run$ = function $$JSCompiler_prototypeAlias$$$$run$$($handler$$50_opt_url$$3$$) {
  var $model$$2_url$$32$$ = "wss://" + window.location.hostname + "/trade/";
  $handler$$50_opt_url$$3$$ != $JSCompiler_alias_NULL$$ && ($model$$2_url$$32$$ = $handler$$50_opt_url$$3$$);
  this.$url_$ = $model$$2_url$$32$$;
  this.$value_to_receive_in_fiat_$ = 0;
  this.$market_to_sell_received_fiat_$ = $JSCompiler_alias_NULL$$;
  $handler$$50_opt_url$$3$$ = this.$getHandler$();
  var $model$$2_url$$32$$ = this.$model_$, $signup_country_el$$ = $goog$dom$getElement$$("id_signup_country"), $signup_state_el$$ = $goog$dom$getElement$$("id_signup_state"), $broker_el$$ = $goog$dom$getElement$$("id_signup_broker"), $withdraw_selector_el$$ = $goog$dom$getElement$$("id_withdraw_method_selector"), $withdraw_submit_el$$ = $goog$dom$getElement$$("id_withdraw_method_submit");
  this.$form_receive_$ = new $uniform$Uniform$$;
  this.$form_receive_$.$decorate$($goog$dom$getElement$$("id_receive_form"));
  $goog$object$forEach$$($bitex$util$getCountries$$(), function($country_info$$, $country_code$$1$$) {
    var $country_el$$77$$ = $country_info$$;
    $goog$isArrayLike$$($country_el$$77$$) && ($country_el$$77$$ = $country_el$$77$$[0]);
    $country_el$$77$$ = $goog$dom$createDom$$("option", {value:$country_code$$1$$}, $country_el$$77$$);
    $signup_country_el$$.appendChild($country_el$$77$$)
  }, this);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $signup_country_el$$, "change", this.$onChangeCountry_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $signup_state_el$$, "change", this.$onChangeState_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $broker_el$$, "change", this.$onChangeBroker_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $withdraw_selector_el$$, "change", this.$onChangeWithDrawMethod_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $model$$2_url$$32$$, "model_setBrokerList", this.$onBrokerList_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $withdraw_submit_el$$, "click", this.$onWithdrawSubmitClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "opened", this.$onConnectionOpen_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "closed", this.$onConnectionClose_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "error", this.$onConnectionError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "error_message", this.$onConnectionErrorMessage_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "rx: "));
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "sent_raw_message", $goog$bind$$(this.$onBitexRawMessageLogger_$, this, "tx: "));
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "heartbeat", this.$onHearBeat_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "broker_list", this.$onBrokerListResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "security_list", this.$onSecurityList_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "login_ok", this.$onUserLoginOk_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "login_error", this.$onUserLoginError_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "withdraw_response", this.$onBitexWithdrawResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "withdraw_confirmation_response", this.$onBitexWithdrawConfirmationResponse_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, this.$conn_$, "deposit_refresh", this.$onDepositRefresh_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_my_transaction_menu"), "click", this.$onMyTransactionMenuClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_login_btn_login"), "click", this.$onUserLogin_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_signup_confirm"), "click", this.$onUserSignupButtonClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_enter_btn_receive"), "click", this.$onEnterReceiveClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_transactions_refresh"), "click", this.$onTransactionsRefreshClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_withdraw_confirmation_dialog"), "click", this.$onWithdrawConfirmClick_$);
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_payout_amount"), "input", this.$onWithdrawPayoutAmountChange_$);
  var $button_signup$$ = new $goog$ui$Button$$;
  $button_signup$$.$decorate$($goog$dom$getElement$$("id_signup_confirm"));
  $JSCompiler_StaticMethods_listen$$($handler$$50_opt_url$$3$$, $goog$dom$getElement$$("id_signup_terms"), "click", function($e$$80$$) {
    $button_signup$$.$setEnabled$($e$$80$$.target.checked)
  });
  $button_signup$$.$setEnabled$($JSCompiler_alias_FALSE$$);
  $goog$isDefAndNotNull$$($model$$2_url$$32$$.get("DefaultCountry")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$2_url$$32$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$2_url$$32$$.get("DefaultCountry")));
  try {
    this.$conn_$.open(this.$url_$)
  }catch($e$$81$$) {
    $JSCompiler_StaticMethods_showNotification$$(this, "danger", "Error", "" + $e$$81$$)
  }
};
function $JSCompiler_StaticMethods_showNotification$$($JSCompiler_StaticMethods_showNotification$self$$, $type$$102$$, $alert_content_title$$9$$, $content$$19$$) {
  var $display_time$$ = 3E3;
  $goog$isNumber$$($JSCompiler_alias_VOID$$) && ($display_time$$ = $JSCompiler_alias_VOID$$);
  $alert_content_title$$9$$ = $goog$dom$createDom$$("span", $JSCompiler_alias_VOID$$, [$goog$dom$createDom$$("strong", $JSCompiler_alias_VOID$$, $alert_content_title$$9$$), " ", $content$$19$$]);
  var $notification$$ = new $bootstrap$Alert$$($type$$102$$, $alert_content_title$$9$$, $JSCompiler_alias_TRUE$$);
  $notification$$.render($goog$dom$getElement$$("id_notifications"));
  if(0 < $display_time$$) {
    var $handler$$51$$ = $JSCompiler_StaticMethods_showNotification$self$$.$getHandler$();
    $goog$Timer$callOnce$$(function() {
      var $anim$$3$$ = new $goog$fx$dom$FadeOutAndHide$$($notification$$.$getElement$(), 200);
      $JSCompiler_StaticMethods_listenOnce$$($handler$$51$$, $anim$$3$$, "end", function() {
        $notification$$.$dispose$();
        $anim$$3$$.$dispose$()
      });
      $anim$$3$$.play()
    }, $display_time$$, $JSCompiler_StaticMethods_showNotification$self$$)
  }
}
$JSCompiler_prototypeAlias$$.$onConnectionOpen_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionOpen_$$() {
  this.$model_$.get("SecurityList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestSecurityList$();
  this.$model_$.get("BrokerList") != $JSCompiler_alias_NULL$$ || this.$conn_$.$requestBrokerList$();
  var $handler$$52$$ = this.$getHandler$();
  this.$timer_$ = new $goog$Timer$$(3E5);
  $JSCompiler_StaticMethods_listen$$($handler$$52$$, this.$timer_$, $goog$Timer$TICK$$, this.$onTimerHeartBeat_$);
  this.$timer_$.start();
  $JSCompiler_StaticMethods_sendHearBeat$$(this.$conn_$);
  jQuery.mobile.changePage("#login")
};
$JSCompiler_prototypeAlias$$.$onConnectionClose_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionClose_$$() {
  jQuery.mobile.changePage("#preLoad")
};
$JSCompiler_prototypeAlias$$.$onConnectionError_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionError_$$() {
  jQuery.mobile.changePage("#preLoad")
};
$JSCompiler_prototypeAlias$$.$onConnectionErrorMessage_$ = function $$JSCompiler_prototypeAlias$$$$onConnectionErrorMessage_$$($e$$87$$) {
  console.log("> error: ", $e$$87$$.data.Detail)
};
$JSCompiler_prototypeAlias$$.$onTimerHeartBeat_$ = function $$JSCompiler_prototypeAlias$$$$onTimerHeartBeat_$$() {
  $JSCompiler_StaticMethods_sendHearBeat$$(this.$conn_$)
};
$JSCompiler_prototypeAlias$$.$onHearBeat_$ = function $$JSCompiler_prototypeAlias$$$$onHearBeat_$$($e$$89$$) {
  this.$model_$.set("latency", new Date(Date.now()) - new Date($e$$89$$.data.SendTime))
};
$JSCompiler_prototypeAlias$$.$onBrokerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerListResponse_$$($e$$90$$) {
  var $msg$$53$$ = $e$$90$$.data, $broker_list$$ = [];
  $goog$array$forEach$$($msg$$53$$.BrokerListGrp, function($broker_array$$) {
    var $broker_info$$ = {};
    $goog$array$forEach$$($msg$$53$$.Columns, function($column$$, $index$$64$$) {
      $broker_info$$[$column$$] = $broker_array$$[$index$$64$$]
    }, this);
    var $skip$$ = $JSCompiler_alias_FALSE$$;
    switch($broker_info$$.SignupLabel) {
      case "{MSG_BROKER_APPLY}":
        $skip$$ = $JSCompiler_alias_TRUE$$;
        break;
      case "{MSG_NOTIFY_NEW_BROKER}":
        $broker_info$$.SignupLabel = "Notify me when a new broker arrive in my region"
    }
    $skip$$ || ($broker_info$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$), $broker_list$$.push($broker_info$$))
  }, this);
  this.$model_$.set("BrokerList", $broker_list$$)
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawConfirmationResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawConfirmationResponse_$$($e$$91$$) {
  $e$$91$$.data.ConfirmationToken != $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_showNotification$$(this, "info", "Withdraw confirmed"), location.href = "#menu") : ($JSCompiler_StaticMethods_showNotification$$(this, "error", "Invalid confirmation token!"), location.href = "#id_withdraw_confirmation_dialog")
};
$JSCompiler_prototypeAlias$$.$onBitexWithdrawResponse_$ = function $$JSCompiler_prototypeAlias$$$$onBitexWithdrawResponse_$$() {
  location.href = "#id_withdraw_confirmation_dialog"
};
$JSCompiler_prototypeAlias$$.$onWithdrawPayoutAmountChange_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawPayoutAmountChange_$$() {
  var $el_fixed_fee_fixed_fee$$ = $goog$dom$getElement$$("id_payout_fixed_fee"), $el_payout_percent_fee_percent_fee_percent_fee_value$$ = $goog$dom$getElement$$("id_payout_percent_fee"), $amount$$3_el_payout_amount$$ = $goog$dom$getElement$$("id_payout_amount"), $el_total_fees$$ = $goog$dom$getElement$$("id_payout_fees");
  $goog$dom$setTextContent$$($el_total_fees$$, 0);
  var $fixed_fee_value_valueFormatter$$ = new $goog$i18n$NumberFormat$$(1), $pos$$12$$ = [0], $raw_amount$$ = $goog$dom$forms$getValue$$($amount$$3_el_payout_amount$$), $amount$$3_el_payout_amount$$ = $fixed_fee_value_valueFormatter$$.parse($raw_amount$$, $pos$$12$$);
  $pos$$12$$[0] != $raw_amount$$.length || (isNaN($amount$$3_el_payout_amount$$) || 0 >= $amount$$3_el_payout_amount$$) || ($amount$$3_el_payout_amount$$ *= 1E8, $el_payout_percent_fee_percent_fee_percent_fee_value$$ = $goog$dom$forms$getValue$$($el_payout_percent_fee_percent_fee_percent_fee_value$$), $pos$$12$$ = [0], $el_payout_percent_fee_percent_fee_percent_fee_value$$ = $fixed_fee_value_valueFormatter$$.parse($el_payout_percent_fee_percent_fee_percent_fee_value$$, $pos$$12$$), isNaN($el_payout_percent_fee_percent_fee_percent_fee_value$$) && 
  ($el_payout_percent_fee_percent_fee_percent_fee_value$$ = 0), $el_fixed_fee_fixed_fee$$ = $goog$dom$forms$getValue$$($el_fixed_fee_fixed_fee$$), $pos$$12$$ = [0], $fixed_fee_value_valueFormatter$$ = $fixed_fee_value_valueFormatter$$.parse($el_fixed_fee_fixed_fee$$, $pos$$12$$), isNaN($fixed_fee_value_valueFormatter$$) && ($fixed_fee_value_valueFormatter$$ = 0), $fixed_fee_value_valueFormatter$$ *= 1E8, $goog$dom$setTextContent$$($el_total_fees$$, (($amount$$3_el_payout_amount$$ - $fixed_fee_value_valueFormatter$$) * 
  ($el_payout_percent_fee_percent_fee_percent_fee_value$$ / 100) + $fixed_fee_value_valueFormatter$$) / 1E8))
};
$JSCompiler_prototypeAlias$$.$onWithdrawConfirmClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawConfirmClick_$$($e$$94$$) {
  "ok" == $e$$94$$.target.getAttribute("data-action-value") && this.$conn_$.$confirmWithdraw$($goog$dom$forms$getValue$$($goog$dom$getElement$$("id_withdraw_confirmation")))
};
$JSCompiler_prototypeAlias$$.$onSecurityList_$ = function $$JSCompiler_prototypeAlias$$$$onSecurityList_$$($e$$95_msg$$55$$) {
  $e$$95_msg$$55$$ = $e$$95_msg$$55$$.data;
  $goog$array$forEach$$($e$$95_msg$$55$$.Currencies, function($currency$$2$$) {
    this.$currency_info_$[$currency$$2$$.Code] = {code:$currency$$2$$.Code, $format$:$currency$$2$$.FormatJS, $human_format$:$currency$$2$$.HumanFormatJS, description:$currency$$2$$.Description, $sign$:$currency$$2$$.Sign, $pip$:$currency$$2$$.Pip, $is_crypto$:$currency$$2$$.IsCrypto}
  }, this);
  var $symbols$$3$$ = [];
  $goog$array$forEach$$($e$$95_msg$$55$$.Instruments, function($instrument$$1$$) {
    var $symbol$$9$$ = $instrument$$1$$.Symbol;
    this.$all_markets_$[$symbol$$9$$] = {symbol:$symbol$$9$$, description:$instrument$$1$$.Description};
    $symbols$$3$$.push($symbol$$9$$);
    this.$model_$.set("formatted_last_price_" + $instrument$$1$$.Symbol, $JSCompiler_StaticMethods_formatCurrency$$(this, 0, $instrument$$1$$.Currency, $JSCompiler_alias_TRUE$$), $JSCompiler_alias_TRUE$$)
  }, this);
  this.$model_$.set("SecurityList", $e$$95_msg$$55$$)
};
function $JSCompiler_StaticMethods_adjustBrokerData_$$($JSCompiler_StaticMethods_adjustBrokerData_$self$$, $broker_info$$1$$) {
  var $fmt$$ = new $goog$i18n$NumberFormat$$(1);
  $goog$object$forEach$$($broker_info$$1$$.WithdrawStructure, function($withdraw_methods$$) {
    $goog$array$forEach$$($withdraw_methods$$, function($method$$5$$) {
      $method$$5$$.percent_fee = $fmt$$.$format$($method$$5$$.percent_fee / 100);
      $method$$5$$.fixed_fee = $fmt$$.$format$($method$$5$$.fixed_fee / 1E8)
    })
  });
  $broker_info$$1$$.Currencies = $broker_info$$1$$.Currencies.split(",");
  1 === $broker_info$$1$$.Currencies.length && $goog$string$isEmpty$$($broker_info$$1$$.Currencies[0]) && ($broker_info$$1$$.Currencies = []);
  var $allowed_markets$$ = {}, $broker_currencies$$ = $goog$array$toArray$$($broker_info$$1$$.Currencies);
  $goog$array$forEach$$($broker_info$$1$$.CryptoCurrencies, function($crypto_currency$$) {
    $broker_currencies$$.push($crypto_currency$$.CurrencyCode);
    $goog$object$findKey$$(this.$all_markets_$, function($market_info$$, $symbol$$10$$) {
      if(0 <= $symbol$$10$$.indexOf($crypto_currency$$.CurrencyCode)) {
        return $JSCompiler_alias_TRUE$$
      }
    }) != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($broker_info$$1$$.Currencies, function($currency$$3$$) {
      var $market_currency$$ = $goog$object$findKey$$(this.$all_markets_$, function($market_info$$1$$, $symbol$$11$$) {
        if(0 <= $symbol$$11$$.indexOf($currency$$3$$)) {
          return $JSCompiler_alias_TRUE$$
        }
      });
      $market_currency$$ != $JSCompiler_alias_NULL$$ && ($allowed_markets$$[$market_currency$$] = this.$all_markets_$[$market_currency$$])
    }, this)
  }, $JSCompiler_StaticMethods_adjustBrokerData_$self$$);
  $broker_info$$1$$.BrokerCurrencies = $broker_currencies$$;
  $broker_info$$1$$.AllowedMarkets = $allowed_markets$$;
  var $percent_fmt$$ = new $goog$i18n$NumberFormat$$(3);
  $JSCompiler_StaticMethods_setMaximumFractionDigits$$($percent_fmt$$);
  $JSCompiler_StaticMethods_setMinimumFractionDigits$$($percent_fmt$$);
  $broker_info$$1$$.FormattedTransactionFeeBuy = $percent_fmt$$.$format$($broker_info$$1$$.TransactionFeeBuy / 1E4);
  $broker_info$$1$$.FormattedTransactionFeeSell = $percent_fmt$$.$format$($broker_info$$1$$.TransactionFeeSell / 1E4);
  return $broker_info$$1$$
}
$JSCompiler_prototypeAlias$$.$isCryptoCurrency$ = function $$JSCompiler_prototypeAlias$$$$isCryptoCurrency$$($currency_code$$6$$) {
  return this.$currency_info_$[$currency_code$$6$$].$is_crypto$
};
$JSCompiler_prototypeAlias$$.$onUserLoginOk_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginOk_$$($e$$96_handler$$53_msg$$56$$) {
  $e$$96_handler$$53_msg$$56$$ = $e$$96_handler$$53_msg$$56$$.data;
  this.$model_$.set("UserID", $e$$96_handler$$53_msg$$56$$.UserID);
  this.$model_$.set("Username", $e$$96_handler$$53_msg$$56$$.Username);
  this.$model_$.set("TwoFactorEnabled", $e$$96_handler$$53_msg$$56$$.TwoFactorEnabled);
  this.$model_$.set("IsBroker", $e$$96_handler$$53_msg$$56$$.IsBroker);
  this.$model_$.set("IsVerified", 1 < $e$$96_handler$$53_msg$$56$$.Profile.Verified);
  var $broker_currencies$$1$$ = new $goog$structs$Set$$, $allowed_markets$$1$$ = {}, $user_brokers$$ = {}, $broker_info$$2_profile$$;
  $e$$96_handler$$53_msg$$56$$.Broker != $JSCompiler_alias_NULL$$ && ($broker_info$$2_profile$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $e$$96_handler$$53_msg$$56$$.Broker), $goog$object$extend$$($allowed_markets$$1$$, $broker_info$$2_profile$$.AllowedMarkets), $broker_currencies$$1$$.$addAll$($broker_info$$2_profile$$.BrokerCurrencies), this.$model_$.set("Broker", $broker_info$$2_profile$$), $user_brokers$$[$broker_info$$2_profile$$.BrokerID] = $broker_info$$2_profile$$, $e$$96_handler$$53_msg$$56$$.IsBroker || 
  this.$model_$.set("UserBrokers", $user_brokers$$));
  $broker_info$$2_profile$$ = $e$$96_handler$$53_msg$$56$$.Profile;
  $e$$96_handler$$53_msg$$56$$.IsBroker && ($broker_info$$2_profile$$ = $JSCompiler_StaticMethods_adjustBrokerData_$$(this, $broker_info$$2_profile$$), $user_brokers$$[$broker_info$$2_profile$$.BrokerID] = $broker_info$$2_profile$$, this.$model_$.set("UserBrokers", $user_brokers$$), $goog$object$extend$$($allowed_markets$$1$$, $broker_info$$2_profile$$.AllowedMarkets), $broker_currencies$$1$$.$addAll$($broker_info$$2_profile$$.BrokerCurrencies));
  this.$model_$.set("Profile", $broker_info$$2_profile$$);
  if($e$$96_handler$$53_msg$$56$$.IsBroker) {
    this.$model_$.set("SelectedBrokerID", this.$model_$.get("Profile").BrokerID)
  }else {
    if($e$$96_handler$$53_msg$$56$$.Broker != $JSCompiler_alias_NULL$$) {
      this.$model_$.set("SelectedBrokerID", this.$model_$.get("Broker").BrokerID);
      $goog$dom$removeChildren$$($goog$dom$getElement$$("id_receive_currency"));
      $goog$object$forEach$$(this.$model_$.get("Broker").AllowedMarkets, function($market$$, $symbol$$12$$) {
        var $currency_el$$ = $goog$dom$createDom$$("option", {value:$symbol$$12$$}, "He pays in " + (this.$conn_$.$currency_info_$[$symbol$$12$$.substr(0, 3)].description + (", you get " + this.$conn_$.$currency_info_$[$symbol$$12$$.substr(3)].description)));
        $goog$dom$getElement$$("id_receive_currency").appendChild($currency_el$$)
      }, this);
      $goog$style$showElement$$($goog$dom$getElement$$("id_receive_currency_control_holder"), 1 < this.$model_$.get("Broker").Currencies.length);
      var $el_withdraw_method_selector$$ = $goog$dom$getElement$$("id_withdraw_method_selector");
      $goog$dom$removeChildren$$($el_withdraw_method_selector$$);
      var $el_withdraw_currency_selector$$ = $goog$dom$getElement$$("id_withdraw_currency_selector");
      $goog$dom$removeChildren$$($el_withdraw_currency_selector$$);
      var $currency_count$$ = 0;
      $goog$object$forEach$$(this.$model_$.get("Broker").WithdrawStructure, function($withdraw_methods$$1$$, $currency$$4$$) {
        this.$isCryptoCurrency$($currency$$4$$) || ($goog$dom$appendChild$$($el_withdraw_currency_selector$$, $goog$dom$createDom$$("option", {value:$currency$$4$$}, $currency$$4$$)), $goog$array$forEach$$($withdraw_methods$$1$$, function($child$$inline_705_method$$6$$) {
          $child$$inline_705_method$$6$$ = $goog$dom$createDom$$("option", {value:$child$$inline_705_method$$6$$.method}, $child$$inline_705_method$$6$$.description);
          $el_withdraw_method_selector$$.appendChild($child$$inline_705_method$$6$$)
        }), $goog$events$dispatchEvent$$($el_withdraw_method_selector$$, "change"), $currency_count$$ += 1)
      }, this);
      $goog$style$showElement$$($goog$dom$getElement$$("id_payout_currency"), 1 < $currency_count$$)
    }
  }
  this.$model_$.set("AllowedMarkets", $allowed_markets$$1$$);
  this.$model_$.set("BrokerCurrencies", $broker_currencies$$1$$.$getValues$());
  this.$conn_$.$requestBalances$();
  this.$conn_$.$requestDepositMethods$();
  var $instruments$$ = [];
  $goog$object$forEach$$($allowed_markets$$1$$, function($obj$$99$$, $instrument$$2$$) {
    $instruments$$.push($instrument$$2$$)
  });
  this.$market_data_subscription_id_$ = this.$conn_$.$subscribeMarketData$(0, $instruments$$, ["0"]);
  $e$$96_handler$$53_msg$$56$$ = this.$getHandler$();
  $JSCompiler_StaticMethods_listen$$($e$$96_handler$$53_msg$$56$$, this.$conn_$, "ob_clear." + this.$market_data_subscription_id_$, this.$onOBClear_$);
  $JSCompiler_StaticMethods_listen$$($e$$96_handler$$53_msg$$56$$, this.$conn_$, "ob_delete_orders_thru." + this.$market_data_subscription_id_$, this.$onOBDeleteOrdersThru_$);
  $JSCompiler_StaticMethods_listen$$($e$$96_handler$$53_msg$$56$$, this.$conn_$, "ob_delete_order." + this.$market_data_subscription_id_$, this.$onOBDeleteOrder_$);
  $JSCompiler_StaticMethods_listen$$($e$$96_handler$$53_msg$$56$$, this.$conn_$, "ob_update_order." + this.$market_data_subscription_id_$, this.$onOBUpdateOrder_$);
  $JSCompiler_StaticMethods_listen$$($e$$96_handler$$53_msg$$56$$, this.$conn_$, "ob_new_order." + this.$market_data_subscription_id_$, this.$onOBNewOrder_$);
  this.$model_$.get("IsVerified") ? jQuery.mobile.changePage("#menu") : 0 == this.$model_$.get("Profile").Verified ? jQuery.mobile.changePage("#waitingVerification") : jQuery.mobile.changePage("#menu")
};
$JSCompiler_prototypeAlias$$.$onOBClear_$ = function $$JSCompiler_prototypeAlias$$$$onOBClear_$$($e$$97$$) {
  this.$bids_$[$e$$97$$.data.Symbol] = [];
  this.$value_to_receive_in_fiat_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$)
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrdersThru_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrdersThru_$$($e$$98_msg$$58$$) {
  $e$$98_msg$$58$$ = $e$$98_msg$$58$$.data;
  var $index$$65$$ = $e$$98_msg$$58$$.MDEntryPositionNo, $symbol$$14$$ = $e$$98_msg$$58$$.Symbol;
  "0" == $e$$98_msg$$58$$.MDEntryType && (this.$bids_$[$symbol$$14$$].splice(0, $index$$65$$), this.$value_to_receive_in_fiat_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$))
};
$JSCompiler_prototypeAlias$$.$onOBDeleteOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBDeleteOrder_$$($e$$99_msg$$59$$) {
  $e$$99_msg$$59$$ = $e$$99_msg$$59$$.data;
  var $index$$66$$ = $e$$99_msg$$59$$.MDEntryPositionNo - 1, $symbol$$15$$ = $e$$99_msg$$59$$.Symbol;
  "0" == $e$$99_msg$$59$$.MDEntryType && (this.$bids_$[$symbol$$15$$].splice($index$$66$$, 1), this.$value_to_receive_in_fiat_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$))
};
$JSCompiler_prototypeAlias$$.$onOBUpdateOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBUpdateOrder_$$($e$$100_msg$$60$$) {
  $e$$100_msg$$60$$ = $e$$100_msg$$60$$.data;
  var $index$$67$$ = $e$$100_msg$$60$$.MDEntryPositionNo - 1, $qty$$4$$ = $e$$100_msg$$60$$.MDEntrySize, $symbol$$16$$ = $e$$100_msg$$60$$.Symbol;
  "0" == $e$$100_msg$$60$$.MDEntryType && (this.$bids_$[$symbol$$16$$][$index$$67$$] = [this.$bids_$[$index$$67$$][0], $qty$$4$$, this.$bids_$[$index$$67$$][2]], this.$value_to_receive_in_fiat_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$))
};
$JSCompiler_prototypeAlias$$.$onOBNewOrder_$ = function $$JSCompiler_prototypeAlias$$$$onOBNewOrder_$$($e$$101_msg$$61$$) {
  $e$$101_msg$$61$$ = $e$$101_msg$$61$$.data;
  var $index$$68$$ = $e$$101_msg$$61$$.MDEntryPositionNo - 1, $price$$5$$ = $e$$101_msg$$61$$.MDEntryPx, $qty$$5$$ = $e$$101_msg$$61$$.MDEntrySize, $username$$4$$ = $e$$101_msg$$61$$.Username, $symbol$$17$$ = $e$$101_msg$$61$$.Symbol;
  "0" == $e$$101_msg$$61$$.MDEntryType && ($goog$array$splice$$(this.$bids_$[$symbol$$17$$], $index$$68$$, 0, [$price$$5$$, $qty$$5$$, $username$$4$$]), this.$value_to_receive_in_fiat_$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$))
};
$JSCompiler_prototypeAlias$$.$onMyTransactionMenuClick_$ = function $$JSCompiler_prototypeAlias$$$$onMyTransactionMenuClick_$$($e$$102_handler$$54$$) {
  this.$model_$.get("IsVerified") ? this.$transactions_list_view_$ == $JSCompiler_alias_NULL$$ && (this.$ledger_request_id_$ = parseInt(1E7 * Math.random(), 10), $e$$102_handler$$54$$ = this.$getHandler$(), this.$transactions_list_view_$ = new $bitex$ui$ListView$$({rowFormatterFn:$goog$bind$$(this.$formatTransactionRecord_$, this), rowClassFn:function() {
    return["ui-li-static", "ui-body-inherit", "ui-li-has-count"]
  }}), $JSCompiler_StaticMethods_listen$$($e$$102_handler$$54$$, this.$transactions_list_view_$, "list_view_request_data", this.$onTransactionsListViewRequestData_$), $JSCompiler_StaticMethods_listen$$($e$$102_handler$$54$$, this.$conn_$, "ledger_list." + this.$ledger_request_id_$, this.$onLedgerListResponse_$), this.$transactions_list_view_$.render($goog$dom$getElement$$("id_transactions_container"))) : ($e$$102_handler$$54$$.preventDefault(), $e$$102_handler$$54$$.stopPropagation())
};
$JSCompiler_prototypeAlias$$.$onTransactionsRefreshClick_$ = function $$JSCompiler_prototypeAlias$$$$onTransactionsRefreshClick_$$() {
  this.$transactions_list_view_$ != $JSCompiler_alias_NULL$$ && (this.$transactions_list_view_$.$model_$.$currentPage$ = 0, this.$transactions_list_view_$.clear(), this.$transactions_list_view_$.reload())
};
$JSCompiler_prototypeAlias$$.$formatTransactionRecord_$ = function $$JSCompiler_prototypeAlias$$$$formatTransactionRecord_$$($record$$1$$) {
  var $value_element$$;
  $value_element$$ = "D" == $record$$1$$.Operation ? $goog$dom$createDom$$("span", ["ui-li-count", "ui-body-b"], $JSCompiler_StaticMethods_formatCurrency$$(this, $record$$1$$.Amount / 1E8, $record$$1$$.Currency, $JSCompiler_alias_TRUE$$)) : $goog$dom$createDom$$("span", ["ui-li-count", "ui-body-a"], $JSCompiler_StaticMethods_formatCurrency$$(this, $record$$1$$.Amount / 1E8, $record$$1$$.Currency, $JSCompiler_alias_TRUE$$));
  return[$record$$1$$.Created, $value_element$$]
};
$JSCompiler_prototypeAlias$$.$onTransactionsListViewRequestData_$ = function $$JSCompiler_prototypeAlias$$$$onTransactionsListViewRequestData_$$($e$$104_limit$$8$$) {
  var $page$$9$$ = $e$$104_limit$$8$$.options.Page;
  $e$$104_limit$$8$$ = $e$$104_limit$$8$$.options.Limit;
  var $userID$$ = this.$model_$.get("UserID"), $brokerID$$ = this.$model_$.get("Broker").BrokerID;
  this.$conn_$.$requestLedgerList$(this.$ledger_request_id_$, $page$$9$$, $e$$104_limit$$8$$, $brokerID$$, $userID$$, "USD")
};
$JSCompiler_prototypeAlias$$.$onLedgerListResponse_$ = function $$JSCompiler_prototypeAlias$$$$onLedgerListResponse_$$($e$$105_msg$$62$$) {
  this.$transactions_list_view_$ != $JSCompiler_alias_NULL$$ && ($e$$105_msg$$62$$ = $e$$105_msg$$62$$.data, $JSCompiler_StaticMethods_appendResultSet$$(this.$transactions_list_view_$, $e$$105_msg$$62$$.LedgerListGrp, $e$$105_msg$$62$$.Columns))
};
$JSCompiler_prototypeAlias$$.$onUserLoginError_$ = function $$JSCompiler_prototypeAlias$$$$onUserLoginError_$$($e$$106_msg$$63$$) {
  $e$$106_msg$$63$$ = $e$$106_msg$$63$$.data;
  this.$model_$.set("UserID", "");
  this.$model_$.set("Username", "");
  $e$$106_msg$$63$$.NeedSecondFactor ? jQuery.mobile.changePage("#secondStep") : jQuery.mobile.changePage("#wrongLogin")
};
$JSCompiler_prototypeAlias$$.$onBitexRawMessageLogger_$ = function $$JSCompiler_prototypeAlias$$$$onBitexRawMessageLogger_$$($action$$2$$, $e$$107$$) {
  var $raw_msg$$ = $e$$107$$.data;
  try {
    console.log($action$$2$$ + ":" + $raw_msg$$)
  }catch($e$$108$$) {
  }
};
$JSCompiler_prototypeAlias$$.$getHandler$ = function $$JSCompiler_prototypeAlias$$$$getHandler$$() {
  return this.$handler_$ || (this.$handler_$ = new $goog$events$EventHandler$$(this))
};
$JSCompiler_prototypeAlias$$.$onUserLogin_$ = function $$JSCompiler_prototypeAlias$$$$onUserLogin_$$($e$$109_username$$5$$) {
  console.log("---\x3e sending login");
  $e$$109_username$$5$$.preventDefault();
  $e$$109_username$$5$$.stopPropagation();
  var $error_list_form_element_password$$3$$ = $goog$dom$getElement$$("id_form_login"), $uf$$ = new $uniform$Uniform$$;
  $uf$$.$decorate$($error_list_form_element_password$$3$$);
  $error_list_form_element_password$$3$$ = $JSCompiler_StaticMethods_validate$$($uf$$);
  0 < $error_list_form_element_password$$3$$.length ? ($goog$array$forEach$$($error_list_form_element_password$$3$$, function($error_msg$$1$$) {
    $JSCompiler_StaticMethods_showNotification$$(this, "danger", "Error", $error_msg$$1$$)
  }, this), $e$$109_username$$5$$.stopPropagation(), $e$$109_username$$5$$.preventDefault()) : ($e$$109_username$$5$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_login_username")), $error_list_form_element_password$$3$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_login_password")), this.$model_$.set("Password", $error_list_form_element_password$$3$$), this.$conn_$.login($e$$109_username$$5$$, $error_list_form_element_password$$3$$), console.log("login sent"))
};
$JSCompiler_prototypeAlias$$.$onEnterReceiveClick_$ = function $$JSCompiler_prototypeAlias$$$$onEnterReceiveClick_$$($e$$110_error_list$$1_handler$$55_value_to_receive$$) {
  $e$$110_error_list$$1_handler$$55_value_to_receive$$.preventDefault();
  $e$$110_error_list$$1_handler$$55_value_to_receive$$.stopPropagation();
  $e$$110_error_list$$1_handler$$55_value_to_receive$$ = $JSCompiler_StaticMethods_validate$$(this.$form_receive_$);
  if(0 < $e$$110_error_list$$1_handler$$55_value_to_receive$$.length) {
    this.$value_to_receive_in_fiat_$ = 0, $goog$array$forEach$$($e$$110_error_list$$1_handler$$55_value_to_receive$$, function($error_msg$$2$$) {
      $JSCompiler_StaticMethods_showNotification$$(this, "danger", "Invalid amount", $error_msg$$2$$)
    }, this)
  }else {
    if($e$$110_error_list$$1_handler$$55_value_to_receive$$ = $goog$string$toNumber$$($goog$dom$forms$getValue$$($goog$dom$getElement$$("id_display_receive"))), 0 >= $e$$110_error_list$$1_handler$$55_value_to_receive$$) {
      this.$value_to_receive_in_fiat_$ = 0, $JSCompiler_StaticMethods_showNotification$$(this, "danger", "", "Missing amount")
    }else {
      $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_display_receive"), "");
      this.$value_to_receive_in_fiat_$ = parseInt(1E8 * $e$$110_error_list$$1_handler$$55_value_to_receive$$, 10);
      this.$market_to_sell_received_fiat_$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_receive_currency"));
      $e$$110_error_list$$1_handler$$55_value_to_receive$$ = this.$getHandler$();
      var $crypto_currency_code$$1$$ = this.$market_to_sell_received_fiat_$.substr(0, 3);
      this.$deposit_request_id_$ = parseInt(1E7 * Math.random(), 10);
      this.$quote_list_$[this.$deposit_request_id_$] = [];
      $JSCompiler_StaticMethods_listenOnce$$($e$$110_error_list$$1_handler$$55_value_to_receive$$, this.$conn_$, "deposit_response." + this.$deposit_request_id_$, this.$onDepositResponse_$);
      $goog$dom$setTextContent$$($goog$dom$getElement$$("id_receive_payment_crypto_currency_public_address"), "");
      $goog$dom$removeChildren$$($goog$dom$getElement$$("id_receive_payment_crypto_currency_public_address_qr_code"));
      this.$conn_$.$requestDeposit$(this.$deposit_request_id_$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $crypto_currency_code$$1$$, "" + this.$deposit_request_id_$);
      $JSCompiler_StaticMethods_recalculateCryptoPayment$$(this, this.$market_to_sell_received_fiat_$, this.$value_to_receive_in_fiat_$);
      jQuery.mobile.changePage("#id_receive_crypto_payment")
    }
  }
};
$JSCompiler_prototypeAlias$$.$onDepositResponse_$ = function $$JSCompiler_prototypeAlias$$$$onDepositResponse_$$($e$$111_msg$$64$$) {
  $e$$111_msg$$64$$ = $e$$111_msg$$64$$.data;
  this.$input_address_$ = $e$$111_msg$$64$$.Data.InputAddress;
  $goog$dom$setTextContent$$($goog$dom$getElement$$("id_receive_payment_crypto_currency_public_address"), $e$$111_msg$$64$$.Data.InputAddress);
  $JSCompiler_StaticMethods_redrawQrCode_$$(this)
};
$JSCompiler_prototypeAlias$$.$onDepositRefresh_$ = function $$JSCompiler_prototypeAlias$$$$onDepositRefresh_$$($e$$112_msg$$65_quote$$) {
  $e$$112_msg$$65_quote$$ = $e$$112_msg$$65_quote$$.data;
  if("4" == $e$$112_msg$$65_quote$$.Status && $e$$112_msg$$65_quote$$.ClOrdID == "" + this.$deposit_request_id_$) {
    var $MSG_MERCHANT_APP_NOTIFICATION_DEPOSITED_AMOUNT_CONTENT$$ = $JSCompiler_StaticMethods_formatCurrency$$(this.$conn_$, $e$$112_msg$$65_quote$$.PaidValue, $e$$112_msg$$65_quote$$.Currency);
    $JSCompiler_StaticMethods_showNotification$$(this, "success", "Received", $MSG_MERCHANT_APP_NOTIFICATION_DEPOSITED_AMOUNT_CONTENT$$);
    var $paid_value$$ = $e$$112_msg$$65_quote$$.PaidValue;
    $e$$112_msg$$65_quote$$.Data.ForwardFee != $JSCompiler_alias_NULL$$ && ($paid_value$$ += $e$$112_msg$$65_quote$$.Data.ForwardFee);
    console.log(this.$quote_list_$[this.$deposit_request_id_$]);
    console.log("PaidValue : " + $paid_value$$ + "," + (new Date).getTime());
    $e$$112_msg$$65_quote$$ = $goog$array$find$$(this.$quote_list_$[this.$deposit_request_id_$], function($user_quote$$) {
      if($user_quote$$[0] === $paid_value$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }, this);
    $e$$112_msg$$65_quote$$ == $JSCompiler_alias_NULL$$ && (this.$quote_list_$[this.$deposit_request_id_$].splice(1), $e$$112_msg$$65_quote$$ = this.$quote_list_$[this.$deposit_request_id_$][0]);
    console.log("elapsed_time_ms: " + ((new Date).getTime() - $e$$112_msg$$65_quote$$[5]) + " ms");
    this.$conn_$.$sendSellLimitedOrder$($e$$112_msg$$65_quote$$[4], $e$$112_msg$$65_quote$$[0], $e$$112_msg$$65_quote$$[1], $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, this.$deposit_request_id_$);
    console.log($e$$112_msg$$65_quote$$);
    jQuery.mobile.changePage("#dialog-complete")
  }
};
function $JSCompiler_StaticMethods_redrawQrCode_$$($JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$) {
  if($JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$input_address_$ != $JSCompiler_alias_NULL$$) {
    var $child$$inline_715_img_src$$ = "https://chart.googleapis.com/chart?cht=qr&chs=320x320&chl=" + $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$input_address_$, $quote_data$$;
    $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$quote_list_$[$JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$deposit_request_id_$] != $JSCompiler_alias_NULL$$ && $goog$isArrayLike$$($JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$quote_list_$[$JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$deposit_request_id_$]) && $goog$isArrayLike$$($JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$quote_list_$[$JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$deposit_request_id_$][0]) && 
    ($quote_data$$ = $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$quote_list_$[$JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$deposit_request_id_$][0]);
    $quote_data$$ != $JSCompiler_alias_NULL$$ && ($child$$inline_715_img_src$$ = "https://chart.googleapis.com/chart?cht=qr&chs=320x320&chl=" + encodeURIComponent("bitcoin://" + $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.$input_address_$ + "?amount=" + $quote_data$$[0] / 1E8));
    $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$ = $goog$dom$getFirstElementChild$$($goog$dom$getElement$$("id_receive_payment_crypto_currency_public_address_qr_code"));
    $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.src != $child$$inline_715_img_src$$ && ($JSCompiler_StaticMethods_redrawQrCode_$self_current_element$$.src = $child$$inline_715_img_src$$) : ($child$$inline_715_img_src$$ = $goog$dom$createDom$$("img", {src:$child$$inline_715_img_src$$, width:"100%"}), $goog$dom$getElement$$("id_receive_payment_crypto_currency_public_address_qr_code").appendChild($child$$inline_715_img_src$$))
  }
}
function $JSCompiler_StaticMethods_recalculateCryptoPayment$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$, $quote_data$$1_symbol$$19$$, $total_amount_to_receive_in_fiat$$) {
  if($quote_data$$1_symbol$$19$$ == $JSCompiler_alias_NULL$$ || 0 >= $total_amount_to_receive_in_fiat$$) {
    $goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_has_liquidity_content"), $JSCompiler_alias_FALSE$$), $goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_no_liquidity_content"), $JSCompiler_alias_TRUE$$)
  }else {
    var $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$;
    var $currency_code$$8_order_depth$$inline_718$$ = $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$bids_$[$quote_data$$1_symbol$$19$$], $crypto_currency_code$$2_username$$inline_719$$ = $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$model_$.get("Username"), $fee$$1_fee$$inline_720$$ = $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$model_$.get("Broker").TransactionFeeSell, $amount_to_pay_price$$inline_723$$ = $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ = 
    0, $vwap$$inline_724$$ = 0, $order$$inline_725$$, $fee$$1_fee$$inline_720$$ = $total_amount_to_receive_in_fiat$$ * $fee$$1_fee$$inline_720$$ / 1E4, $work_total$$inline_727$$ = $total_amount_to_receive_in_fiat$$ - $fee$$1_fee$$inline_720$$, $order_idx$$inline_728$$;
    for($order_idx$$inline_728$$ in $currency_code$$8_order_depth$$inline_718$$) {
      if($order$$inline_725$$ = $currency_code$$8_order_depth$$inline_718$$[$order_idx$$inline_728$$], $crypto_currency_code$$2_username$$inline_719$$ != $order$$inline_725$$[2]) {
        var $order_volume$$inline_729$$ = $order$$inline_725$$[0] * $order$$inline_725$$[1] / 1E8;
        if($order_volume$$inline_729$$ >= $work_total$$inline_727$$) {
          $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ += 1E8 * ($work_total$$inline_727$$ / $order$$inline_725$$[0]);
          $amount_to_pay_price$$inline_723$$ = $order$$inline_725$$[0];
          $work_total$$inline_727$$ = 0;
          $vwap$$inline_724$$ = ($total_amount_to_receive_in_fiat$$ - $fee$$1_fee$$inline_720$$) / $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$;
          break
        }else {
          $order_volume$$inline_729$$ < $work_total$$inline_727$$ && ($amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ += $order$$inline_725$$[1], $work_total$$inline_727$$ -= $order_volume$$inline_729$$)
        }
      }
    }
    $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ = 0 === $work_total$$inline_727$$ && 0 < $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ ? [$amount_to_pay_price$$inline_723$$, parseInt($amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$, 10), parseInt($fee$$1_fee$$inline_720$$, 10), $vwap$$inline_724$$] : $JSCompiler_alias_VOID$$;
    $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ != $JSCompiler_alias_NULL$$ ? ($currency_code$$8_order_depth$$inline_718$$ = $quote_data$$1_symbol$$19$$.substr(3), $crypto_currency_code$$2_username$$inline_719$$ = $quote_data$$1_symbol$$19$$.substr(0, 3), $fee$$1_fee$$inline_720$$ = $total_amount_to_receive_in_fiat$$ * $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$model_$.get("Broker").TransactionFeeSell / 1E4, $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ = 
    $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$[0], $amount_to_pay_price$$inline_723$$ = parseInt(1E8 * (($total_amount_to_receive_in_fiat$$ + $fee$$1_fee$$inline_720$$) / $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$), 10), $total_amount_to_receive_in_fiat$$ += $fee$$1_fee$$inline_720$$, $quote_data$$1_symbol$$19$$ = [$amount_to_pay_price$$inline_723$$, $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$, 
    $fee$$1_fee$$inline_720$$, $total_amount_to_receive_in_fiat$$, $quote_data$$1_symbol$$19$$, (new Date).getTime()], $goog$isArrayLike$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$quote_list_$[$JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$deposit_request_id_$]) ? $goog$array$splice$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$quote_list_$[$JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$deposit_request_id_$], 0, 0, $quote_data$$1_symbol$$19$$) : 
    $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$quote_list_$[$JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$deposit_request_id_$] = [$quote_data$$1_symbol$$19$$], $goog$dom$setTextContent$$($goog$dom$getElement$$("id_amount_to_pay_in_crypto"), $JSCompiler_StaticMethods_formatCurrency$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$conn_$, $amount_to_pay_price$$inline_723$$ / 1E8, $crypto_currency_code$$2_username$$inline_719$$, $JSCompiler_alias_FALSE$$)), 
    $goog$dom$setTextContent$$($goog$dom$getElement$$("id_balance_report_qty_currency_description"), $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$conn_$.$currency_info_$[$crypto_currency_code$$2_username$$inline_719$$].description), $goog$dom$setTextContent$$($goog$dom$getElement$$("id_balance_report_quote"), $JSCompiler_StaticMethods_formatCurrency$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$conn_$, $amount$$inline_722_order_price_and_expected_amount_and_fee_and_expercted_avg_price_quote$$1$$ / 
    1E8, $currency_code$$8_order_depth$$inline_718$$)), $goog$style$showElement$$($goog$dom$getElement$$("id_balance_report_fee_row"), 0 < $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$model_$.get("Broker").TransactionFeeSell), $goog$dom$setTextContent$$($goog$dom$getElement$$("id_balance_report_broker_fee"), $JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$model_$.get("Broker").FormattedTransactionFeeSell), $goog$dom$setTextContent$$($goog$dom$getElement$$("id_balance_report_fee_amount"), 
    $JSCompiler_StaticMethods_formatCurrency$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$conn_$, $fee$$1_fee$$inline_720$$ / 1E8, $currency_code$$8_order_depth$$inline_718$$)), $goog$dom$setTextContent$$($goog$dom$getElement$$("id_balance_report_total"), $JSCompiler_StaticMethods_formatCurrency$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$.$conn_$, $total_amount_to_receive_in_fiat$$ / 1E8, $currency_code$$8_order_depth$$inline_718$$, $JSCompiler_alias_TRUE$$)), $goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_no_liquidity_content"), 
    $JSCompiler_alias_FALSE$$), $goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_has_liquidity_content"), $JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_redrawQrCode_$$($JSCompiler_StaticMethods_recalculateCryptoPayment$self$$)) : ($goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_has_liquidity_content"), $JSCompiler_alias_FALSE$$), $goog$style$showElement$$($goog$dom$getElement$$("id_receive_crypto_payment_no_liquidity_content"), $JSCompiler_alias_TRUE$$))
  }
}
$JSCompiler_prototypeAlias$$.$onUserSignupButtonClick_$ = function $$JSCompiler_prototypeAlias$$$$onUserSignupButtonClick_$$($e$$113_username$$6$$) {
  $e$$113_username$$6$$.preventDefault();
  $e$$113_username$$6$$.stopPropagation();
  $e$$113_username$$6$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_username"));
  var $password$$4$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password")), $password_2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_password_2")), $email$$2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_email")), $country$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $state$$19$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state")), $broker$$2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker")), 
  $error_list$$2_form_element$$1$$ = $goog$dom$getElement$$("id_form_signup"), $uf$$1$$ = new $uniform$Uniform$$;
  $uf$$1$$.$decorate$($error_list$$2_form_element$$1$$);
  $error_list$$2_form_element$$1$$ = $JSCompiler_StaticMethods_validate$$($uf$$1$$);
  0 < $error_list$$2_form_element$$1$$.length ? $goog$array$forEach$$($error_list$$2_form_element$$1$$, function($error_msg$$3$$) {
    $JSCompiler_StaticMethods_showNotification$$(this, "danger", "", $error_msg$$3$$)
  }, this) : $password$$4$$ !== $password_2$$ ? $JSCompiler_StaticMethods_showNotification$$(this, "danger", "", "Passwords does not match") : (this.$model_$.set("Password", $password$$4$$), this.$conn_$.$signUp$($e$$113_username$$6$$, $password$$4$$, $email$$2$$, $state$$19$$, $country$$1$$, $goog$string$toNumber$$($broker$$2$$)))
};
$JSCompiler_prototypeAlias$$.$onBrokerList_$ = function $$JSCompiler_prototypeAlias$$$$onBrokerList_$$() {
  var $model$$3$$ = this.$model_$, $broker_list$$1$$ = $model$$3$$.get("BrokerList");
  if($broker_list$$1$$ != $JSCompiler_alias_NULL$$) {
    $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
    if($goog$isDefAndNotNull$$($model$$3$$.get("DefaultBrokerID"))) {
      var $broker_info$$3_el$$78$$ = $goog$array$find$$($broker_list$$1$$, function($broker_info$$4$$) {
        if($broker_info$$4$$.BrokerID === $model$$3$$.get("DefaultBrokerID")) {
          return $JSCompiler_alias_TRUE$$
        }
      }), $broker_info$$3_el$$78$$ = $goog$dom$createDom$$("option", {value:$broker_info$$3_el$$78$$.BrokerID}, $broker_info$$3_el$$78$$.SignupLabel);
      $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$3_el$$78$$)
    }
    $goog$object$forEach$$($JSCompiler_StaticMethods_getBrokersByCountry$$(this, ""), function($broker_info$$5_el$$79$$) {
      $model$$3$$.get("DefaultBrokerID") != $broker_info$$5_el$$79$$.BrokerID && ($broker_info$$5_el$$79$$ = $goog$dom$createDom$$("option", {value:$broker_info$$5_el$$79$$.BrokerID}, $broker_info$$5_el$$79$$.SignupLabel), $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$5_el$$79$$))
    }, this);
    $goog$isDefAndNotNull$$($model$$3$$.get("DefaultBrokerID")) && ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$3$$.get("DefaultBrokerID")), this.$onChangeBroker_$());
    var $last_country_code$$ = "", $number_of_countries$$ = 0, $brokers_by_country$$ = {};
    $goog$array$forEach$$($broker_list$$1$$, function($broker_info$$6$$) {
      $broker_info$$6$$.IsBrokerHub || ($broker_info$$6$$.CountryCode in $brokers_by_country$$ ? $brokers_by_country$$[$broker_info$$6$$.CountryCode].push($broker_info$$6$$) : ($brokers_by_country$$[$broker_info$$6$$.CountryCode] = [$broker_info$$6$$], 0 < $broker_info$$6$$.CountryCode.length && ($last_country_code$$ = $broker_info$$6$$.CountryCode, ++$number_of_countries$$)))
    }, this);
    $goog$isDefAndNotNull$$($model$$3$$.get("DefaultCountry")) ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $model$$3$$.get("DefaultCountry")), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $model$$3$$.get("DefaultCountry"))) : 1 === $number_of_countries$$ ? ($goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_country"), $last_country_code$$), $JSCompiler_StaticMethods_onSelectCountry_$$(this, $last_country_code$$)) : this.$onChangeBroker_$()
  }
};
function $JSCompiler_StaticMethods_onSelectCountry_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$) {
  var $model$$4$$ = $JSCompiler_StaticMethods_onSelectCountry_$self$$.$model_$, $countries$$1_country_info$$1$$ = $bitex$util$getCountries$$();
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_state"));
  $countries$$1_country_info$$1$$ = $countries$$1_country_info$$1$$[$selected_country$$];
  $goog$style$showElement$$($goog$dom$getElement$$("id_signup_state"), $goog$isArrayLike$$($countries$$1_country_info$$1$$));
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  if($goog$isArrayLike$$($countries$$1_country_info$$1$$)) {
    var $states_name_array$$ = $countries$$1_country_info$$1$$[2].split("|"), $number_of_states_with_brokers$$ = 0, $last_state_with_broker$$ = "";
    $goog$array$forEach$$($countries$$1_country_info$$1$$[1].split("|"), function($state_code$$, $index$$69$$) {
      var $el$$80$$ = $goog$dom$createDom$$("option", {value:$state_code$$}, $states_name_array$$[$index$$69$$]);
      $goog$dom$getElement$$("id_signup_state").appendChild($el$$80$$);
      0 <= $goog$array$findIndex$$($JSCompiler_StaticMethods_getBrokersByCountry$$(this, $selected_country$$), function($broker_info$$7$$) {
        if($broker_info$$7$$.IsBrokerHub) {
          return $JSCompiler_alias_FALSE$$
        }
        if($broker_info$$7$$.State === $state_code$$) {
          return $JSCompiler_alias_TRUE$$
        }
      }) && (++$number_of_states_with_brokers$$, $last_state_with_broker$$ = $state_code$$)
    }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
    if(1 == $number_of_states_with_brokers$$) {
      $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_state"), $last_state_with_broker$$);
      $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$, $last_state_with_broker$$);
      return
    }
  }
  var $number_of_available_brokers$$ = 0, $number_of_brokers_in_same_country$$ = 0, $last_available_broker$$ = "";
  $goog$object$forEach$$($JSCompiler_StaticMethods_getBrokersByCountry$$($JSCompiler_StaticMethods_onSelectCountry_$self$$, $selected_country$$), function($broker_info$$8$$) {
    var $el$$81$$ = $goog$dom$createDom$$("option", {value:$broker_info$$8$$.BrokerID}, $broker_info$$8$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($el$$81$$);
    $broker_info$$8$$.IsBrokerHub || (++$number_of_available_brokers$$, $broker_info$$8$$.CountryCode === $selected_country$$ && (++$number_of_brokers_in_same_country$$, $last_available_broker$$ = $broker_info$$8$$.BrokerID))
  }, $JSCompiler_StaticMethods_onSelectCountry_$self$$);
  $goog$isDefAndNotNull$$($model$$4$$.get("DefaultBrokerID")) ? $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$4$$.get("DefaultBrokerID")) : 1 == $number_of_brokers_in_same_country$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$);
  $JSCompiler_StaticMethods_onSelectCountry_$self$$.$onChangeBroker_$()
}
function $JSCompiler_StaticMethods_createWitdrawRequiredFields_$$($current_fields$$) {
  var $el_withdraw_method_fields$$ = $goog$dom$getElement$$("id_withdraw_method_fields");
  $goog$dom$removeChildren$$($el_withdraw_method_fields$$);
  $goog$array$forEach$$($current_fields$$, function($child$$inline_748_current_field$$) {
    "client" == $child$$inline_748_current_field$$.side && ($child$$inline_748_current_field$$ = $goog$soy$renderAsElement$$($bitex$ui$Merchant$templates$WithdrawFieldContent$$, {field:$child$$inline_748_current_field$$}), $el_withdraw_method_fields$$.appendChild($child$$inline_748_current_field$$))
  })
}
$JSCompiler_prototypeAlias$$.$onWithdrawSubmitClick_$ = function $$JSCompiler_prototypeAlias$$$$onWithdrawSubmitClick_$$($e$$115$$) {
  var $form_element$$2_withdraw_data$$ = $goog$dom$getElement$$("id_form_request_payout"), $amount$$6_error_list$$3_uf$$2$$ = new $uniform$Uniform$$;
  $amount$$6_error_list$$3_uf$$2$$.$decorate$($form_element$$2_withdraw_data$$);
  $amount$$6_error_list$$3_uf$$2$$ = $JSCompiler_StaticMethods_validate$$($amount$$6_error_list$$3_uf$$2$$);
  if(0 < $amount$$6_error_list$$3_uf$$2$$.length) {
    $goog$array$forEach$$($amount$$6_error_list$$3_uf$$2$$, function($error_msg$$4$$) {
      $JSCompiler_StaticMethods_showNotification$$(this, "danger", "Payout Error", $error_msg$$4$$)
    }, this)
  }else {
    $form_element$$2_withdraw_data$$ = $bitex$util$getFormAsJSON$$($form_element$$2_withdraw_data$$);
    $amount$$6_error_list$$3_uf$$2$$ = $goog$string$toNumber$$($form_element$$2_withdraw_data$$.Amount);
    delete $form_element$$2_withdraw_data$$.Amount;
    var $method$$7$$ = $form_element$$2_withdraw_data$$.Method;
    delete $form_element$$2_withdraw_data$$.Method;
    var $currency$$6$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_withdraw_currency_selector"));
    this.$conn_$.$requestWithdraw$($JSCompiler_alias_VOID$$, $amount$$6_error_list$$3_uf$$2$$, $method$$7$$, $currency$$6$$, $form_element$$2_withdraw_data$$)
  }
  $e$$115$$.stopPropagation();
  $e$$115$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$onChangeWithDrawMethod_$ = function $$JSCompiler_prototypeAlias$$$$onChangeWithDrawMethod_$$() {
  var $withdraw_method_value$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_withdraw_method_selector")), $withdraw_currency_value$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_withdraw_currency_selector"));
  $goog$object$forEach$$(this.$model_$.get("Broker").WithdrawStructure, function($withdraw_methods$$2$$, $currency$$7$$) {
    if($withdraw_currency_value$$ == $currency$$7$$) {
      var $el_fixed_fee$$1$$ = $goog$dom$getElement$$("id_payout_fixed_fee"), $el_payout_percent_fee$$1$$ = $goog$dom$getElement$$("id_payout_percent_fee");
      $goog$dom$forms$setValue$$($el_fixed_fee$$1$$, "0");
      $goog$dom$forms$setValue$$($el_payout_percent_fee$$1$$, "0");
      $goog$array$forEach$$($withdraw_methods$$2$$, function($method$$8$$) {
        $method$$8$$.method == $withdraw_method_value$$ && ($goog$dom$forms$setValue$$($el_fixed_fee$$1$$, $method$$8$$.fixed_fee), $goog$dom$forms$setValue$$($el_payout_percent_fee$$1$$, $method$$8$$.percent_fee), $JSCompiler_StaticMethods_createWitdrawRequiredFields_$$($method$$8$$.fields), repaint_payout())
      }, this)
    }
  }, this)
};
$JSCompiler_prototypeAlias$$.$onChangeCountry_$ = function $$JSCompiler_prototypeAlias$$$$onChangeCountry_$$() {
  var $selected_country$$1$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country"));
  $JSCompiler_StaticMethods_onSelectCountry_$$(this, $selected_country$$1$$)
};
$JSCompiler_prototypeAlias$$.$onChangeState_$ = function $$JSCompiler_prototypeAlias$$$$onChangeState_$$() {
  var $selected_country$$2$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_country")), $selected_state$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_state"));
  $JSCompiler_StaticMethods_onSelectState_$$(this, $selected_country$$2$$, $selected_state$$)
};
$JSCompiler_prototypeAlias$$.$onChangeBroker_$ = function $$JSCompiler_prototypeAlias$$$$onChangeBroker_$$() {
  var $broker$$3_broker_list$$2_model$$5$$ = this.$model_$, $selected_broker$$ = $goog$dom$forms$getValue$$($goog$dom$getElement$$("id_signup_broker")), $broker$$3_broker_list$$2_model$$5$$ = $broker$$3_broker_list$$2_model$$5$$.get("BrokerList");
  if($broker$$3_broker_list$$2_model$$5$$ != $JSCompiler_alias_NULL$$) {
    var $broker$$3_broker_list$$2_model$$5$$ = $goog$array$find$$($broker$$3_broker_list$$2_model$$5$$, function($broker$$4$$) {
      if($broker$$4$$.BrokerID == $selected_broker$$) {
        return $JSCompiler_alias_TRUE$$
      }
    }), $fmt$$1$$ = new $goog$i18n$NumberFormat$$(3);
    $JSCompiler_StaticMethods_setMaximumFractionDigits$$($fmt$$1$$);
    $JSCompiler_StaticMethods_setMinimumFractionDigits$$($fmt$$1$$);
    $broker$$3_broker_list$$2_model$$5$$.FormattedTransactionFeeBuy = $fmt$$1$$.$format$($broker$$3_broker_list$$2_model$$5$$.TransactionFeeBuy / 1E4);
    $broker$$3_broker_list$$2_model$$5$$.FormattedTransactionFeeSell = $fmt$$1$$.$format$($broker$$3_broker_list$$2_model$$5$$.TransactionFeeSell / 1E4)
  }
};
function $JSCompiler_StaticMethods_onSelectState_$$($JSCompiler_StaticMethods_onSelectState_$self$$, $selected_country$$3$$, $selected_state$$1$$) {
  $goog$dom$removeChildren$$($goog$dom$getElement$$("id_signup_broker"));
  var $model$$6$$ = $JSCompiler_StaticMethods_onSelectState_$self$$.$model_$, $number_of_available_brokers$$1$$ = 0, $number_of_brokers_in_same_country_state$$ = 0, $last_available_broker$$1$$ = "";
  $goog$array$forEach$$($JSCompiler_StaticMethods_getBrokersByCountry$$($JSCompiler_StaticMethods_onSelectState_$self$$, $selected_country$$3$$, $selected_state$$1$$), function($broker_info$$9_el$$82$$) {
    $broker_info$$9_el$$82$$.IsBrokerHub || (++$number_of_available_brokers$$1$$, $broker_info$$9_el$$82$$.CountryCode === $selected_country$$3$$ && $broker_info$$9_el$$82$$.State === $selected_state$$1$$ && (++$number_of_brokers_in_same_country_state$$, $last_available_broker$$1$$ = $broker_info$$9_el$$82$$.BrokerID));
    $broker_info$$9_el$$82$$ = $goog$dom$createDom$$("option", {value:$broker_info$$9_el$$82$$.BrokerID}, $broker_info$$9_el$$82$$.SignupLabel);
    $goog$dom$getElement$$("id_signup_broker").appendChild($broker_info$$9_el$$82$$)
  }, $JSCompiler_StaticMethods_onSelectState_$self$$);
  $goog$isDefAndNotNull$$($model$$6$$.get("DefaultBrokerID")) && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $model$$6$$.get("DefaultBrokerID"));
  1 == $number_of_brokers_in_same_country_state$$ && $goog$dom$forms$setValue$$($goog$dom$getElement$$("id_signup_broker"), "" + $last_available_broker$$1$$);
  $JSCompiler_StaticMethods_onSelectState_$self$$.$onChangeBroker_$()
}
function $JSCompiler_StaticMethods_getBrokersByCountry$$($JSCompiler_StaticMethods_getBrokersByCountry$self_brokers$$, $country$$2$$, $opt_state$$1$$) {
  var $response$$ = [], $query$$3$$ = $country$$2$$;
  $opt_state$$1$$ != $JSCompiler_alias_NULL$$ && ($query$$3$$ += "_" + $opt_state$$1$$);
  $JSCompiler_StaticMethods_getBrokersByCountry$self_brokers$$ = $JSCompiler_StaticMethods_getBrokersByCountry$self_brokers$$.$model_$.get("BrokerList");
  $JSCompiler_StaticMethods_getBrokersByCountry$self_brokers$$ != $JSCompiler_alias_NULL$$ && $goog$array$forEach$$($JSCompiler_StaticMethods_getBrokersByCountry$self_brokers$$, function($broker$$5$$) {
    var $broker_accept_array_is_accepted$$ = $broker$$5$$.AcceptCustomersFrom[0], $broker_reject_array_is_rejected$$ = $broker$$5$$.AcceptCustomersFrom[1], $is_explicit_accepted$$ = 0 <= $goog$array$findIndex$$($broker_accept_array_is_accepted$$, function($accept_data$$) {
      return $accept_data$$ === $query$$3$$ || $accept_data$$ === $country$$2$$
    }), $broker_accept_array_is_accepted$$ = $is_explicit_accepted$$ || "*" === $broker_accept_array_is_accepted$$[0], $broker_reject_array_is_rejected$$ = 0 <= $goog$array$findIndex$$($broker_reject_array_is_rejected$$, function($accept_data$$1$$) {
      return $accept_data$$1$$ === $query$$3$$ || $accept_data$$1$$ === $country$$2$$
    }) || "*" === $broker_reject_array_is_rejected$$[0];
    $is_explicit_accepted$$ ? $response$$.push($broker$$5$$) : $broker_accept_array_is_accepted$$ && !$broker_reject_array_is_rejected$$ && $response$$.push($broker$$5$$)
  });
  return $response$$
}
$goog$exportPath_$$("MerchantApp", $bitex$app$MerchantApp$$);
MerchantApp.prototype.run = $bitex$app$MerchantApp$$.prototype.$run$;

