# Resume

LaTeX-based resume, compiled to PDF.

## Edit and preview in Cursor

1. Install the **LaTeX Workshop** extension (Cursor will suggest it via `.vscode/extensions.json`).
2. Open `resume.tex`. The extension will build on save and you can open the PDF with **View LaTeX PDF** from the command palette (`Cmd+Shift+P` → “LaTeX Workshop: View LaTeX PDF”) or from the TeX icon in the sidebar. Use “View in tab” to see the PDF next to your editor.

## Build from the terminal

Requires a LaTeX distribution (e.g. MacTeX on macOS: `brew install --cask mactex`).

```bash
make          # build resume.pdf
make clean    # remove auxiliary files
make view     # build and open PDF
```

## Output

- `resume.pdf` is generated in this directory. Replace or update `David_Rosson_Resume.pdf` for hosting when ready.