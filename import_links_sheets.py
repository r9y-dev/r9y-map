# link munging for sheets import - try not to reuse
# source file has assorted links
import_file = open("/usr/local/google/home/jamesbrookbank/source/github/r9y-map/index.out", "r")
output_file = open("/usr/local/google/home/jamesbrookbank/source/github/r9y-map/sheet_links.out", "w")
# split by lines
content_list = import_file.readlines()
# go through each line
for i in content_list:
    if i.startswith("-"): # get all lines with content ie starting -
        # start and end positions for substring slicing
        start_pos = (i.find("[")) + 1
        end_pos = i.find("]")
        link_name = i[start_pos:end_pos]
        # make a new link for sheet input
        link_name = "../docs/" + link_name + ".html"
        # > to a file
        print(link_name, file=output_file) 
