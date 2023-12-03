var documenterSearchIndex = {"docs":
[{"location":"#Home","page":"Home","title":"CUDSS.jl documentation","text":"","category":"section"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia> ]\npkg> add https://github.com/exanauts/CUDSS.jl.git\npkg> test CUDSS","category":"page"},{"location":"#CUDSS","page":"Home","title":"CUDSS","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"cudss_set\ncudss_get\ncudss","category":"page"},{"location":"#CUDSS.cudss_set","page":"Home","title":"CUDSS.cudss_set","text":"cudss_set(matrix::CudssMatrix, A::CuVector)\ncudss_set(matrix::CudssMatrix, A::CuMatrix)\ncudss_set(matrix::CudssMatrix, A::CuSparseMatrixCSR)\ncudss_set(data::CudssSolver, param::String, value)\ncudss_set(config::CudssConfig, param::String, value)\ncudss_set(data::CudssData, param::String, value)\n\nThe available config parameters are: \"reorderingalg\" \"factorizationalg\" \"solvealg\" \"matchingtype\" \"solvemode\" \"irnsteps\" \"irtol\" \"pivottype\" \"pivotthreshold\" \"pivotepsilon\" \"maxlu_nnz\"\n\nThe available data parameters are: \"info\" \"lunnz\" \"npivots\" \"inertia\" \"permreorder\" \"permrow\" \"permcol\" \"diag\" \"user_perm\"\n\n\n\n\n\n","category":"function"},{"location":"#CUDSS.cudss_get","page":"Home","title":"CUDSS.cudss_get","text":"value = cudss_get(data::CudssSolver, param::String)\nvalue = cudss_get(config::CudssConfig, param::String)\nvalue = cudss_get(data::CudssData, param::String)\n\nThe available config parameters are: \"reorderingalg\" \"factorizationalg\" \"solvealg\" \"matchingtype\" \"solvemode\" \"irnsteps\" \"irtol\" \"pivottype\" \"pivotthreshold\" \"pivotepsilon\" \"maxlu_nnz\"\n\nThe available data parameters are: \"info\" \"lunnz\" \"npivots\" \"inertia\" \"permreorder\" \"permrow\" \"permcol\" \"diag\" \"user_perm\"\n\n\n\n\n\n","category":"function"},{"location":"#CUDSS.cudss","page":"Home","title":"CUDSS.cudss","text":"cudss(phase::String, solver::CudssSolver, x::CuVector, b::CuVector)\ncudss(phase::String, solver::CudssSolver, X::CuMatrix, B::CuMatrix)\ncudss(phase::String, solver::CudssSolver, X::CudssMatrix, B::CudssMatrix)\n\nThe available phases are \"analysis\", \"factorization\", \"refactorization\" and \"solve\". The phases \"solvefwd\", \"solvediag\" and \"solve_bwd\" are available but not yet functional.\n\n\n\n\n\n","category":"function"}]
}
