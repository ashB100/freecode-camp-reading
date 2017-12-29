
        const bar = [];

        // check if a prop is a vendor prop
        const checkIfVendorProp = function(rule) {
            rule.declarations.forEach((declaration) => {
                if (declaration.property.charAt(0) == '-') {
                    // console.log("true" + declaration.property);
                    return true;
                } else { 
                    // console.log("false" + declaration.property);
                    return false;
                }
            });
        }


        const foo = ruletypeonly.reduce((declarations, rule) => {
            if (checkIfVendorProp(rule) == true) {
                bar.push(rule.selectors);
            }

            return bar;
        }, []);
    
        console.log(bar);










        // then for the objs that are rules, find the declarations obj, property value
        // for each rule in ruletypeonly
        ruletypeonly.forEach((rule) => {
            // console.log(rule);
            // console.log(rule.declarations);
            // console.log(rule.selectors); // which selectors

            // each over the declarations object
            rule.declarations.forEach((declaration) => {
                if (declaration.property.charAt(0) == '-') {
                    // console.log(declaration.property);
                    // console.log(rule.selectors);
                    foo.push(rule.selectors); // this puts it in once for each property that is true
                    // we want to only do it one time
                }
            })
            
            console.log(foo);

            // const browserprops = rule.declarations.filter((declaration) => declaration.property.charAt(0) == '-');
            // console.log(browserprops);



            // filter into a new array only the selectors that have declaration.properties that start with a -
        });

        // if the prop value starts with a dash
        // then filter on that and output an object with the selector
        // return array of selectors
