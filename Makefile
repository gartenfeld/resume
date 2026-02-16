.PHONY: all clean view

MAIN = resume

all: $(MAIN).pdf

$(MAIN).pdf: $(MAIN).tex
	latexmk -pdf -interaction=nonstopmode $(MAIN).tex

clean:
	latexmk -C $(MAIN).tex
	rm -f $(MAIN).synctex.gz

view: $(MAIN).pdf
	open $(MAIN).pdf
