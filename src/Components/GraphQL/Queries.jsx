import { gql } from "apollo-boost";

export const LOAD_PRODUCTS = gql`
    query Query($input: CategoryInput) {
        category(input: $input) {
            name
            products {
                id
                name
                inStock
                gallery
                description
                category
                prices {
                    amount
                    currency {
                        label
                        symbol
                    }
                }
                brand
            }
        }
    }
`;
