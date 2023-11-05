Place buisness logic that routes would use here.

Any logic that requires:
- the use of the background worker feature
- extensive calculations
- buisness rules

What not to put in here:
- any database interaction (that should be in /models)
- any routing 


eg.

expense_service.py for a generic name

if need to implement more complex logic that needs to be split further
For example:

expense_portfolioanalysis.py - functions that launch a calculation , and ultity functions associated with that.
expense_loadcsv.py - utility function
etc.
