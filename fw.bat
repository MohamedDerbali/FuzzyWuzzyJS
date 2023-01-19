@echo off
SET ARG=%1
SET SECOND_ARG=%2
IF DEFINED ARG (
    IF "%ARG%"=="--version" (
        echo "Fuzzy Wuzzy CLI version 0.0.1"
        goto end
    )
    IF "%ARG%"=="--help" (
        echo "fw create"
        echo "fw --help"
        echo "fw version"
        goto end
    ) 
    IF "%ARG%"=="create" (
        IF DEFINED SECOND_ARG (
            mkdir %SECOND_ARG% 
            cd %SECOND_ARG%
            git clone -b squeleton https://github.com/MohamedDerbali/FuzzyWuzzyJS.git
            mv FuzzyWuzzyJS/* .
            rmdir /s /q FuzzyWuzzyJS
            cd ..
            goto end 
        )
        IF "%SECOND_ARG%"=="" (
            echo [31mError: Please specify a project name[0m
            goto end
        )
    )
)
IF "%ARG%"=="" (
    echo [31mError: Please specify an argument[0m
    echo use --help to show an example
    goto end
)
:end