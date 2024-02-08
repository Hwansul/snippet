# Selectors

| Basic selectors | Literals | Grouping selectors | Literals |
| ---- | ---- | ---- | ---- |
| [[universal_selectors]] | `*` | [[selector_list]] | `A, B` |
| [[type_selectors]] | `elementname` |  |  |
| [[class_selectors]] | `.classname` |  |  |
| [[id_selectors]] | `#idname` |  |  |
| [[attribute_selectors]] | `[attr=value]` |  |  |


| Combinators | Literals | Pseudo | Literals |
| ---- | ---- | ---- | ---- |
| [[next-sibling_combinator]] | `A + B` | [[pseudo-classes]] | `:` |
| [[subsequent-sibling_combinator]] | `A ~ B` | [[pseudo-elements]] | `::` |
| [[child_combinator]] | `A > B` |  |  |
| [[descendant_combinator]] | `A B` |  |  |
| [[column_combinator]] | `A \|\| B` (Experimental) |  |  |