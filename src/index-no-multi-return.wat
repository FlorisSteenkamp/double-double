(module
    (memory $0 1)
    (export "memory" (memory $0))
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

                ;; qMultQuad
                ;; ---------
                f64.const 0.1
                f64.const 0.2
                f64.const 0.3
                f64.const 0.4
                call $qMultQuad
                drop                

                (local.tee $i (i32.sub (local.get $i) (i32.const 1)))  ;; i = i - 1
                br_if $loop1
                br $block
            )
        )
    )

    (func $fastTwoSum (param $a f64) (param $b f64) (result f64)
        i32.const 0

        (f64.sub
            (local.get $b)
            (f64.sub
                (local.tee $b (f64.add (local.get $a) (local.get $b)))
                (local.get $a)
            )
        )

        ;; returns [b - (x - a), x]  ==>  [stored at 0, returned]
        f64.store         ;; []                - [a, x] stores b - (x - a) in memory (address 0)
        local.get $b      ;; [x]               - [a, x] stores x in memory (address 8)
    )
    (func $twoProduct (param $a f64) (param $b f64) (result f64)
        (local $c f64)
        (local $d f64)
        (local $ah_ f64)
        (local $bh_ f64)

        i32.const 8       ;; pointer to later memory storage

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

        ;; now: $a === x, top of stack === y
        ;; we need to return [y,x]  ==>  [stored at 0, returned]

        f64.store      ;; y => store at 8
        local.get $a   ;; return x
    )
    (func $qMultQuad (param $xl f64) (param $xh f64) (param $yl f64) (param $yh f64) (result f64)
        ;; let c = twoProduct(xh,yh);

        ;; []

        ;; === c
        (call $twoProduct (local.get $xh) (local.get $yh))

        ;; [c[1]]

        ;; let cl1 = c[0];
        ;; let ch = c[1];
        ;; c[1] now on stack
        ;; need to load c[0]
        
        (f64.add ;; === cl3
            (f64.load (i32.const 8))  ;; now c[0] is loaded
            ;; let cl2 = tl1 + tl2;
            (f64.add  ;; === cl2 
                ;; let tl1 = xh*yl;
                ;; let tl2 = xl*yh;
                (f64.mul (local.get $xh) (local.get $yl))  ;; === tl1
                (f64.mul (local.get $xl) (local.get $yh))  ;; === tl2
            )
        )

        ;; [c[1], cl3 === c[0] + xh*yl + xl*yh]

        ;; return fastTwoSum(c[1],cl3);
        call $fastTwoSum

        ;; [fts[1]]

        i32.const 16

        ;; [fts[1], 16]

        (f64.load (i32.const 0))

        ;; [fts[1], 16, fts[0]]

        f64.store   

        ;; [fts[1]
    )
)

;; 231