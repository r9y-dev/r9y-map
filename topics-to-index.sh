cat topics.txt | while read line;
    do 
        # echo "##$line##"  # debug
        [[ ! "$line" ]] && continue;
        line=$(echo $line | tr \/ _); # drop / marks because file system
        line="${line/\&/_}"; # drop & marks because unix system
        line="${line/\%/_}"; # drop % marks because just in case?
        line="${line/\+/_}"; # drop + marks because URL?
        line="${line/\"/_}"; # drop " marks because URLs
        line="${line// /_}"; # drop spaces because URLs
        line="${line//(/_}"; # drop parens because URLs
        line="${line//)/_}"; # drop parens because URLs
        line="${line//__/_}"; # dedupe underscores after all that
        echo "- [$line](${line}.md)"
    done
