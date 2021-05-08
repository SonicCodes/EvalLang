function parse_evaluation(rule) {
  const parsed = rule.trim().split("\n");
  const is_rule = /[<=>]/g;
  console.log(parsed);
  function parse_complex(rule) {
    const operator = rule.match(/([<=>]+)/)[0];
    const vars = rule.split(operator).map((ky) => ky.trim());
    let operation = {};
    switch (operator) {
      case "=": {
        operation = {
          operator: operator,
          value: vars[1].replace(/^'|"|"|'$/gm, ""),
        };
        break;
      }
      case ">": {
        operation = { operator: operator, value: Number(vars[1]) };
        break;
      }
      case "<": {
        operation = { operator: operator, value: Number(vars[1]) };
        break;
      }
      case ">=": {
        operation = { operator: operator, value: Number(vars[1]) };
        break;
      }
      case "=>": {
        operation = { operator: ">=", value: Number(vars[1]) };
        break;
      }
      case "=<": {
        operation = { operator: operator, value: Number(vars[1]) };
        break;
      }
      case "<=": {
        operation = { operator: "=<", value: Number(vars[1]) };
        break;
      }
    }
    return { field: vars[0], ...operation };
  }
  return parsed.map((rule_p) => {
    const rule = rule_p.replace(/;\s*$/, "");
    const is_a_rule = rule.match(is_rule) != null;
    return is_a_rule ? parse_complex(rule) : { field: rule, operator: "!" };
  });
}
