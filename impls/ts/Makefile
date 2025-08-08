STEPS = step0_repl

all: ts

node_modules:
	npm install

step0_repl.js: node_modules step0_repl.ts
	./node_modules/.bin/tsc -p ./

step%.js: node_modules types.ts reader.ts printer.ts env.ts core.ts step%.ts
	./node_modules/.bin/tsc -p ./


.PHONY: ts clean

ts: $(foreach s,$(STEPS),$(s).js)

clean:
	rm -f *.js
