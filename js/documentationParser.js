function getCodeLang(lang)
{
    switch (lang)
    {
        case "lua":
            return Prism.languages.lua;
        default:
            throw new Error(`Unkonw language ${lang}`);
    }
}

function renderMarkdown (markdown) 
{
    let md = window.markdownit({
        html: true, // Enable HTML tags in source
        xhtmlOut: false, // Use '/' to close single tags (<br />)
        breaks: true, // Convert '\n' in paragraphs into <br>
        langPrefix: "language-", // CSS language prefix for fenced blocks
        linkify: true, // autoconvert URL-like texts to links
        typographer: true, // Enable smartypants and other sweet transforms
        // options below are for demo only
        _highlight: true,
        _strict: false,
        _view: "html", // html / src / debug
        highlight: function (code, lang) {
            if (lang)
            {
                getCodeLang(lang);
                return Prism.highlight(code, getCodeLang(lang), lang);
            }
            else
                return "";
        }
    })
    .use(texmath, { engine: katex,
        delimiters: 'dollars',
        katexOptions: { macros: {"\\RR": "\\mathbb{R}"} } } );

    document.querySelectorAll(".markdown-viewer").forEach((markdownDiv) => {
        markdownDiv.innerHTML = md.render(markdown);
    });
};

function updateOutliner()
{
    let outliner = document.querySelector(".outliner-body");
    document.querySelectorAll(".markdown-viewer h2").forEach((target) => {
        let outlinerItem = document.createElement("a");
        outlinerItem.innerText = target.textContent;
        outliner.appendChild(outlinerItem);

        //currying function
        //為了保持target這個不在lambda scope的變數
        let onClick = (target) => {
            return () => {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }

        outlinerItem.addEventListener("click", onClick(target));
    });
}

//main

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("path"))
{
    let path = urlParams.get("path").split("-");
    let currPath = "./documentation";
    for (let i = 0; i < path.length - 1; ++i)
    {
        currPath += `/${path[i]}`;
    }
    currPath += `/${path[path.length - 1]}.md`;
    fetch(currPath)
    .then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.text();
    })
    .then((markdown) => {
        renderMarkdown(markdown)
        updateOutliner();
    })
    .catch((error) => {
        let errorMarkdown = `
        Can not found the page.
        `;
        renderMarkdown(errorMarkdown);
        console.error(error);
    });
}

