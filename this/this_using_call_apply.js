"use strict"

function func() {
    console.log(this);
}

func.call(null);
func.apply(null);

func.call(undefined);
func.apply(undefined);