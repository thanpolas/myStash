import sublime
import sublime_plugin
import os


class ClosureSnippetCommand(sublime_plugin.WindowCommand):
    def run(self):
        v = self.window.new_file()
        v.settings().set('default_dir',
            os.path.join(sublime.packages_path(), 'closure-snippets'))
        v.settings().set('default_extension', 'sublime-snippet')
        v.set_syntax_file('Packages/XML/XML.tmLanguage')

        template = """<snippet>
  <content><![CDATA[
Hello, \${1:this} is a \${2:snippet}.
]]></content>
    <tabTrigger>cl---</tabTrigger>
    <scope>source.js</scope>
    <description>Google Closure ---</description>
</snippet>
"""
        v.run_command("insert_snippet", {"contents": template})
