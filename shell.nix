{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "zotero-course-env";

  buildInputs = with pkgs; [
    nodejs_22          
    zed-editor         
    gh                 
    git
  ];

  shellHook = ''
    echo "================================================="
    echo "🚀 Ambiente do Curso de Zotero Carregado!"
    echo "================================================="
    echo "📦 Node.js: $(node -v)"
    echo "🛠️  Editor: Zed (use o comando 'zeditor .')"
    echo "================================================="
    
    alias zed="zeditor"
  '';
}
