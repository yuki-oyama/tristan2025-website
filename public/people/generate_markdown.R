library(readxl)

# Excelファイルの読み込み
file_path <- "content/people/SCmemberList.xlsx"
df <- read_excel(file_path)

# マークダウン形式に変換する関数
generate_markdown <- function(data) {
  markdown <- "# \n\n"
  markdown <- paste0(markdown, "<div class=\"committees-section\">\n")
  markdown <- paste0(markdown, "<table class=\"scientific-committee-table\">\n")
  
  for (i in 1:nrow(data)) {
    if ((i - 1) %% 3 == 0) {
      if (i != 1) {
        markdown <- paste0(markdown, "  </tr>\n")
      }
      markdown <- paste0(markdown, "  <tr>\n")
    }
    
    name <- data[i, "Name"]
    affiliation <- data[i, "Affiliation"]
    country <- data[i, "Country"]
    markdown <- paste0(markdown, "    <td><strong>", name, "</strong><br><small>", affiliation,", ",country, "</small></td>\n")
  }
  
  # 余ったセルを空にする
  remaining_cells <- 3 - (nrow(data) %% 3)
  if (remaining_cells < 3) {
    for (j in 1:remaining_cells) {
      markdown <- paste0(markdown, "    <td></td>\n")
    }
  }
  
  markdown <- paste0(markdown, "  </tr>\n</table>\n</div>")
  return(markdown)
}

# マークダウンコンテンツを生成
markdown_content <- generate_markdown(df)

# マークダウンファイルに書き込む
output_file <- "content/people/scientific_committee.md"
writeLines(markdown_content, output_file)
