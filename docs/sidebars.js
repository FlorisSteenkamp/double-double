module.exports = {
    sidebar: {
        Introduction: [
            'index'
        ],
        Functions: [
            {
                type: 'category',
                label: 'Basic',
                items: [
                    'modules/_basic_fast_two_diff_',
                    'modules/_basic_fast_two_sum_',
                    'modules/_basic_reduce_significand_',
                    'modules/_basic_split_',
                    'modules/_basic_two_diff_',
                    'modules/_basic_two_product_',
                    'modules/_basic_two_square_',
                    'modules/_basic_two_sum_',
                ],
                collapsed: false
            },
            {
                type: 'category',
                label: 'Unary',
                items: [
                    'modules/_double_double_unary_dd_abs_',
                    'modules/_double_double_unary_dd_div_by_2_',
                    'modules/_double_double_unary_dd_mult_by_2_',
                    'modules/_double_double_unary_dd_mult_by_4_',
                    'modules/_double_double_unary_dd_mult_by_neg_2_',
                    'modules/_double_double_unary_dd_mult_by_neg_4_',
                    'modules/_double_double_unary_dd_negative_of_',
                    'modules/_double_double_unary_dd_sign_',
                    'modules/_double_double_unary_dd_sqrt_',
                ],
                collapsed: true
            },
            {
                type: 'category',
                label: 'Binary',
                items: [
                    'modules/_double_double_binary_dd_add_dd_',
                    'modules/_double_double_binary_dd_compare_',
                    'modules/_double_double_binary_dd_diff_dd_',
                    'modules/_double_double_binary_dd_div_dd_',
                    'modules/_double_double_binary_dd_max_',
                    'modules/_double_double_binary_dd_min_',
                    'modules/_double_double_binary_dd_mult_dd_'
                ],
                collapsed: true
            },
            {
                type: 'category',
                label: 'Arity > 2',
                items: [
                    'modules/_double_double_multi_dd_product_',
                    'modules/_double_double_multi_dd_sum_',                    
                ],
                collapsed: true
            },
            {
                type: 'category',
                label: 'Mixed precision',
                items: [
                    'modules/_double_mixed_double_double_dd_add_double_',
                    'modules/_double_mixed_double_double_dd_div_double_',
                    'modules/_double_mixed_double_double_dd_mult_double_',
                    'modules/_double_mixed_double_double_double_div_double_',
                    'modules/_double_mixed_double_double_double_sqrt_',
                ],
                collapsed: true
            },
            {
                type: 'category',
                label: 'With error propagation',
                items: [
                    'modules/_double_double_with_error_dd_div_dd_with_error_',
                    'modules/_double_with_err_div_with_err_',
                    'modules/_double_with_err_sqrt_with_err_',
                ],
                collapsed: true
            },
            {
                type: 'category',
                label: 'TRepresentation',
                items: [
                    'modules/_double_representation_bit_length_',
                    'modules/_double_representation_exponent_',
                    'modules/_double_representation_get_max_set_bit_',
                    'modules/_double_representation_is_bit_aligned_',
                    'modules/_double_representation_lsb_exponent_',
                    'modules/_double_representation_msb_exponent_',
                    'modules/_double_representation_parse_double_',
                    'modules/_double_representation_significand_',
                ],
                collapsed: true
            },
        ]
    },
};
