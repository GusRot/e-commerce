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
                attributes {
                    id
                    name
                    type
                    items {
                        displayValue
                        value
                        id
                    }
                }
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

export const LOAD_CURRENCIES = gql`
    query Query {
        currencies {
            label
            symbol
        }
    }
`;

export const LOAD_PRODUCT = gql`
    query Query($productId: String!) {
        product(id: $productId) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                items {
                    id
                    value
                    displayValue
                }
                id
                name
                type
            }
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
`;
