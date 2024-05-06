(module
    ;;(memory $0 1)
    ;;(export "memory" (memory $0))
    (export "loop" (func $loop))
    (export "fastTwoSum" (func $fastTwoSum))
    (export "qMultQuad" (func $qMultQuad))
    (export "twoProduct" (func $twoProduct))
    (func $loop 
        (local $i i32)
        (local.set $i (i32.const 10000000))  ;; looop 10 million times
        (block $block
            (loop $loop1

                ;; twoProduct
                ;; ----------
                ;;f64.const 0.1
                ;;f64.const 0.2
                ;;call $twoProduct
                ;;drop
                ;;drop

                ;; qMultQuad
                ;; ---------
                f64.const 0.1
                f64.const 0.2
                f64.const 0.3
                f64.const 0.4
                call $qMultQuad
                drop
                drop

                (local.tee $i (i32.sub (local.get $i) (i32.const 1)))  ;; i = i - 1
                br_if $loop1
                br $block
            )
        )
    )
    (func $qMultBy2 (param $l f64) (param $h f64) (result f64 f64)
        (f64.mul (f64.const 2) (local.get $l))
        (f64.mul (f64.const 2) (local.get $h))
    )
    (func $qNegativeOf (param $l f64) (param $h f64) (result f64 f64)
        (f64.mul (f64.const -1) (local.get $l))
        (f64.mul (f64.const -1) (local.get $h))
    )
    (func $qDivBy2 (param $l f64) (param $h f64) (result f64 f64)
        (f64.mul (f64.const 0.5) (local.get $l))
        (f64.mul (f64.const 0.5) (local.get $h))
    )
    (func $qMultDouble1 (param $y f64) (param $xl f64) (param $xh f64) (return f64 f64)
    (local $cl1 f64)
    (local $ch f64)
    (local $th f64)

    ;; let [cl1,ch] = twoProduct(xh,y)
    (call $twoProduct (local.get $xh) (local.get $y))
    local.tee $ch
    local.set $cl1
    ;; [$ch]

    ;; let cl2 = xl*y;
    (f64.mul (local.get $xl) (local.get $y))
    ;; [$ch, cl2]

    ;; let [tl1,th] = fastTwoSum(ch,cl2);
    call $fastTwoSum
    ;; [tl1,th]
    local.set $th
    ;; [tl1]
    
    ;; let tl2 = tl1 + cl1;
    local.get $cl1
    ;; [tl1,cl1]
    f64.add
    ;; [tl2]
    
    local.get $th
    ;; [tl2,th]
    ;; let [zl, zh] = fastTwoSum(th,tl2)
    call $fastTwoSumR

    ;; return [zl,zh];
    )
    (func $fastTwoSum (param $a f64) (param $b f64) (result f64 f64)
        (f64.sub
            (local.get $b)
            (f64.sub
                (local.tee $b (f64.add (local.get $a) (local.get $b)))
                (local.get $a)
            )
        )

        ;; return [b - (x - a), x]
        local.get $b
    )
    ;; A reversed input param version of fastTwoSum
    (func $fastTwoSumR (param $b f64) (param $a f64) (result f64 f64)
        (f64.sub
            (local.get $b)
            (f64.sub
                (local.tee $b (f64.add (local.get $a) (local.get $b)))
                (local.get $a)
            )
        )

        local.get $b
    )
    (func $twoProduct (param $a f64) (param $b f64) (result f64 f64)
        (local $c f64)
        (local $d f64)
        (local $ah_ f64)
        (local $bh_ f64)

        ;; 134217729 === 2**27 + 1
        (f64.sub (local.tee $c (f64.mul (f64.const 134217729) (local.get $a))) (local.get $a))
        local.set $ah_
        (f64.sub (local.tee $d (f64.mul (f64.const 134217729) (local.get $b))) (local.get $b))
        local.set $bh_

        ;; stack is now empty again (only containing the first 0 constant)
        (f64.sub  ;; === y = (al*bl) - ((x - (ah*bh)) - (al*bh) - (ah*bl))
            (f64.mul  ;; === al*bl
                (local.tee $ah_ (f64.sub  ;; === al
                    (local.get $a)
                    (local.tee $c (f64.sub (local.get $c) (local.get $ah_)))  ;; === ah
                ))
                (local.tee $bh_ (f64.sub ;; === bl
                    (local.get $b)
                    (local.tee $d (f64.sub (local.get $d) (local.get $bh_)))  ;; === bh
                ))
            )
            (f64.sub  ;; === (x - ah*bh) - (al*bh) - (ah*bl)
                (f64.sub  ;; === (x - ah*bh) - (al*bh)
                    (f64.sub  ;; === x - ah*bh
                        (local.tee $a (f64.mul (local.get $a) (local.get $b))) ;; === x
                        (f64.mul (local.get $c) (local.get $d))  ;; === ah*bh
                    )
                    (f64.mul (local.get $ah_) (local.get $d))  ;; === al*bh
                )
                (f64.mul (local.get $c) (local.get $bh_))  ;; === ah*bl
            )
        )

        ;; currently: $a === x, top of stack === y
        ;; we need to return [y,x]

        local.get $a
    )
    (func $qMultQuad (param $xl f64) (param $xh f64) (param $yl f64) (param $yh f64) (result f64 f64)
        (f64.add  ;; xh*yl + xl*yh
            (f64.mul (local.get $xh) (local.get $yl))  ;; xh*yl
            (f64.mul (local.get $xl) (local.get $yh))  ;; xl*yh
        )
        ;; [xh*yl + xl*yh]

        ;; let c = twoProduct(xh,yh);
        (call $twoProduct (local.get $xh) (local.get $yh))
        ;; [xh*yl + xl*yh, c[0], c[1]]

        local.set $xh  ;; use $xh as a temp variable
        ;; [xh*yl + xl*yh, c[0]]

        f64.add
        ;; [(xh*yl + xl*yh) + c[0]]

        local.get $xh
        ;; [(xh*yl + xl*yh) + c[0], c[1]]

        ;; return fastTwoSum(c[1], c[0] + (xh*yl + xl*yh));
        call $fastTwoSumR
    )
    (func $getXCubic (param $0 f64) (param $1 f64) (param $2 f64) (param $3 f64) (result i32)
        (local $4 i32)
        (local $5 i32)
        i32.const 16
        i32.const 3
        call $~lib/rt/stub/__alloc
        local.tee $4
        i32.const 32
        i32.const 0
        call $~lib/rt/stub/__alloc
        local.tee $5
        i32.store
        local.get $4
        local.get $5
        i32.store offset=4
        local.get $4
        i32.const 32
        i32.store offset=8
        local.get $4
        i32.const 4
        i32.store offset=12
        local.get $4
        i32.load offset=4
        local.tee $5
        local.get $3
        f64.const 3
        local.get $1
        local.get $2
        f64.sub
        f64.mul
        f64.add
        local.get $0
        f64.sub
        f64.store
        local.get $5
        f64.const 3
        local.get $2
        f64.const 2
        local.get $1
        f64.mul
        f64.sub
        local.get $0
        f64.add
        f64.mul
        f64.store offset=8
        local.get $5
        f64.const 3
        local.get $1
        local.get $0
        f64.sub
        f64.mul
        f64.store offset=16
        local.get $5
        local.get $0
        f64.store offset=24
        local.get $4
    )
)
